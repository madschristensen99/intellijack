const { LitNodeClient } = require("@lit-protocol/lit-node-client");
const { LIT_RPC, LitNetwork } = require("@lit-protocol/constants");
const fs = require('fs');
const {
  createSiweMessageWithRecaps,
  generateAuthSig,
  LitAbility,
  LitActionResource,
} = require("@lit-protocol/auth-helpers");
const ethers = require("ethers");
require("dotenv").config();

// Import constants
const { FHENIX_RPC_URL, ORACLE_ADDRESS, ORACLE_ABI } = require('./constants');

async function processPromptAddedEvent(event, messagesRoles, litNodeClient, sessionSigs) {
  console.log("New PromptAdded event detected!");
  console.log(`Prompt ID: ${event.args.promptId}`);
  console.log(`Prompt Callback ID: ${event.args.promptCallbackId}`);
  console.log(`Sender: ${event.args.sender}`);
  console.log(`Block number: ${event.blockNumber}`);

  try {
    console.log("Executing Lit Action...");
    const litActionCode = fs.readFileSync('litAction.js', 'utf8');
    const result = await litNodeClient.executeJs({
      sessionSigs,
      code: litActionCode,
      jsParams: {
        messagesRoles: messagesRoles,
        promptId: event.args.promptId,
        promptCallbackId: event.args.promptCallbackId,
      },
    });
    console.log("Lit Action executed successfully. Result:", result);

    if (result.response) {
      console.log("Lit Action response:");
      console.log(JSON.stringify(result.response, null, 2));
    }
  } catch (error) {
    console.error("Error during Lit Action execution:", error);
  }
}

async function startEventListener(contract, provider, litNodeClient, sessionSigs) {
  console.log("Starting event listener...");
  const latestBlock = await provider.getBlockNumber();
  console.log(`Current block number: ${latestBlock}`);

  contract.on("PromptAdded", async (promptId, promptCallbackId, sender, event) => {
    if (event.blockNumber > latestBlock) {
      try {
        console.log("Attempting to get messages...");
        let messagesRoles = await contract.getMessagesAndRoles(promptId, promptCallbackId);
        console.log("Messages retrieved successfully:", messagesRoles);
        await processPromptAddedEvent(event, messagesRoles, litNodeClient, sessionSigs);
      } catch (error) {
        console.error("Error processing PromptAdded event:", error);
      }
    } else {
      console.log(`Skipping old event from block ${event.blockNumber}`);
    }
  });

  console.log("Event listener is now active and waiting for new PromptAdded events...");
}

async function main() {
  console.log("Starting the process...");
  
  const mnemonic = process.env.WALLET_MNEMONIC;
  if (!mnemonic) {
    throw new Error("WALLET_MNEMONIC is not set in the .env file");
  }

  console.log("Creating wallet from mnemonic...");
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  const fhenixProvider = new ethers.providers.JsonRpcProvider(FHENIX_RPC_URL);
  const ethersSigner = wallet.connect(fhenixProvider);
  console.log("Wallet created successfully. Address:", ethersSigner.address);

  const contract = new ethers.Contract(ORACLE_ADDRESS, ORACLE_ABI, fhenixProvider);

  console.log("Initializing LitNodeClient...");
  const litNodeClient = new LitNodeClient({
    litNetwork: LitNetwork.DatilDev,
    debug: false,
  });

  try {
    console.log("Connecting to LitNodeClient...");
    await litNodeClient.connect();
    console.log("Connected to LitNodeClient successfully.");

    console.log("Getting session signatures...");
    const sessionSigs = await litNodeClient.getSessionSigs({
      chain: "ethereum",
      expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
      resourceAbilityRequests: [
        {
          resource: new LitActionResource("*"),
          ability: LitAbility.LitActionExecution,
        },
      ],
      authNeededCallback: async ({
        resourceAbilityRequests,
        expiration,
        uri,
      }) => {
        console.log("Generating auth signature...");
        const toSign = await createSiweMessageWithRecaps({
          uri: uri,
          expiration: expiration,
          resources: resourceAbilityRequests,
          walletAddress: ethersSigner.address,
          nonce: await litNodeClient.getLatestBlockhash(),
          litNodeClient,
        });
        return await generateAuthSig({
          signer: ethersSigner,
          toSign,
        });
      },
    });
    console.log("Session signatures obtained successfully.");

    await startEventListener(contract, fhenixProvider, litNodeClient, sessionSigs);

    // Keep the script running
    console.log("Script is now running continuously. Press Ctrl+C to stop.");
  } catch (error) {
    console.error("An error occurred during the setup process:", error);
  }
}

main().catch((error) => {
  console.error("An unhandled error occurred:", error);
});
