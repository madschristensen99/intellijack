(async () => {
  const go = async () => {
    console.log('Incoming messagesRoles:', JSON.stringify(messagesRoles, null, 2));
    // Extract the user's message from messagesRoles
    // Extract all messages from messagesRoles
    const messages = messagesRoles.map(([role, content]) => ({
      role: role.toLowerCase(),
      content: content[0][1]  // Assuming the content is always in this format
    }));
    const FHENIX_RPC_URL = "https://api.helium.fhenix.zone";
    const mnemonic = "curve circle grief risk club ensure will camp verify mistake output chase";
    const provider = new ethers.providers.JsonRpcProvider(FHENIX_RPC_URL);
    const signer = ethers.Wallet.fromMnemonic(mnemonic).connect(provider);

    const ORACLE_ADDRESS = "0x53F09fB2E49df3207e716BdF732A5Ac6960EaB5c";
    const addResponseabi = 	[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "promptCallBackId",
				"type": "uint256"
			}
		],
		"name": "getMessagesAndRoles",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "contentType",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "value",
								"type": "string"
							}
						],
						"internalType": "struct IOracle.Content[]",
						"name": "content",
						"type": "tuple[]"
					}
				],
				"internalType": "struct IOracle.Message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "promptCallBackId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "functionName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "functionArguments",
						"type": "string"
					},
					{
						"internalType": "uint64",
						"name": "created",
						"type": "uint64"
					},
					{
						"internalType": "string",
						"name": "model",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "systemFingerprint",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "object",
						"type": "string"
					},
					{
						"internalType": "uint32",
						"name": "completionTokens",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "promptTokens",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "totalTokens",
						"type": "uint32"
					}
				],
				"internalType": "struct IOracle.LlmResponse",
				"name": "response",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "errorMessage",
				"type": "string"
			}
		],
		"name": "addResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
    ];

    // Make a call to AI API and contract call within the same runOnce
    let result = await Lit.Actions.runOnce({ waitForResponse: true, name: "aiCallerAndContractCall" }, async () => {
      // AI API call
      const response = await fetch('https://api.red-pill.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-pP2M1z3dJjqvFKqLowZf0XyFVjlIQ77uWnZZ3E65DdwLqKnm'
        },
        body: JSON.stringify({
            model: "anthropic/claude-3.5-sonnet",
            messages: messages,
            max_tokens: 1000
        })
      });
      
      const aiResponse = await response.json();
      console.log('AI Response:', aiResponse);

      // Contract call
      const contractCaller = new ethers.Contract(ORACLE_ADDRESS, addResponseabi, signer);
      let id = promptId.toNumber ? promptId.toNumber() : parseInt(promptId.hex, 16);
      let callbackId = promptCallbackId.toNumber ? promptCallbackId.toNumber() : parseInt(promptCallbackId.hex, 16);

      try {
        await contractCaller.addResponse(id, callbackId, [
          aiResponse.id || "resp_1234567890",
          aiResponse.choices[0].message.content || "Hello! How can I assist you today?",
          "",
          "",
          aiResponse.created || 1635528000,
          aiResponse.model || "claude-3-5-sonnet-20240620",
          aiResponse.system_fingerprint || "fp_1234567890",
          "chat.completion",
          aiResponse.usage.completion_tokens || 10,
          aiResponse.usage.prompt_tokens || 5,
          aiResponse.usage.total_tokens || 15
        ], "");
        console.log("Contract call successful");
      } catch (e) {
        console.error("Error calling addResponse:", e);
        console.error("Error name:", e.name);
        console.error("Error message:", e.message);
        if (e.stack) console.error("Stack trace:", e.stack);
      }

      return aiResponse;
    });

    console.log("Lit Action execution completed");
    return result;
  };

  // Run the async function
  const result = await go();
  
  // Set the response from the action
  Lit.Actions.setResponse({ response: result });
})();
