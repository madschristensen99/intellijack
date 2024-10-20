Intellijack is an AI oracle service built on Fhenix providing inference over private data with onchain outcomes. 

To run it, run node lit.js 

Over the past several months I have been developing on Galadriel's devnet ("L1 for AI"). However they are pivoting and have deprecated their AI oracle service. In order to ensure that I can still use my old dApps, I created an oracle service on Lit Protocol that can provide the same service that I once had on only Galadriel's chain onto any EVM chain. Deploying the oracle on Fhenix specificially unlocks numerous capabilities that were unavailable on Galadriel as the AI service can now inference over private data. In additiona, I have added an agent struct so that the oracle contract can facilitate something similar to OpenAI's GPT's. To demonstrate this, I have developed a basic Agent marketplace where people can create agents and modify them to have secret attributes. I have also created a smart contract for Story Protocol that simulates how this economy could work. 

Story Protocol contract (storyGPTs.sol):
https://testnet.storyscan.xyz/tx/0x8d5f073dd52e5c0608f4047e87e0d8eaeb99b3261873dab5660286fb83ed1b80

Source of Galadriel oracle contracts:
https://github.com/galadriel-ai/contracts/tree/main/contracts/contracts
