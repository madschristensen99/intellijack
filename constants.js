// constants.js

const FHENIX_RPC_URL = "https://api.helium.fhenix.zone";
const ORACLE_ADDRESS = "0x53F09fB2E49df3207e716BdF732A5Ac6960EaB5c";
// Add the ABI here. For now, I'll include a placeholder for the PromptAdded event
const ORACLE_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "functionId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "functionInput",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "functionCallbackId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "FunctionAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "KnowledgeBaseIndexRequestAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "indexCid",
				"type": "string"
			}
		],
		"name": "KnowledgeBaseIndexed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "kbQueryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "KnowledgeBaseQueryAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "promptCallbackId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "PromptAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "attestation",
				"type": "string"
			}
		],
		"name": "addAttestation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "functionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "functionCallBackId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "response",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "errorMessage",
				"type": "string"
			}
		],
		"name": "addFunctionResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "struct IOracle.GroqResponse",
				"name": "response",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "errorMessage",
				"type": "string"
			}
		],
		"name": "addGroqResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "addKnowledgeBase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kbIndexingRequestId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "indexCid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "error",
				"type": "string"
			}
		],
		"name": "addKnowledgeBaseIndex",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kbQueryId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "kbQueryCallbackId",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "documents",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "errorMessage",
				"type": "string"
			}
		],
		"name": "addKnowledgeBaseQueryResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "struct IOracle.OpenAiResponse",
				"name": "response",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "errorMessage",
				"type": "string"
			}
		],
		"name": "addOpenAiResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "pcr0Hash",
				"type": "string"
			}
		],
		"name": "addPcr0Hash",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "string",
				"name": "response",
				"type": "string"
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "attestations",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "callbackAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "functionCallbackId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "functionType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "functionInput",
				"type": "string"
			}
		],
		"name": "createFunctionCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptCallbackId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "model",
						"type": "string"
					},
					{
						"internalType": "int8",
						"name": "frequencyPenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "logitBias",
						"type": "string"
					},
					{
						"internalType": "uint32",
						"name": "maxTokens",
						"type": "uint32"
					},
					{
						"internalType": "int8",
						"name": "presencePenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "responseFormat",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "seed",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "stop",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "temperature",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "topP",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "user",
						"type": "string"
					}
				],
				"internalType": "struct IOracle.GroqRequest",
				"name": "config",
				"type": "tuple"
			}
		],
		"name": "createGroqLlmCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kbQueryCallbackId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "query",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "num_documents",
				"type": "uint32"
			}
		],
		"name": "createKnowledgeBaseQuery",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptCallbackId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "model",
						"type": "string"
					},
					{
						"internalType": "int8",
						"name": "frequencyPenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "logitBias",
						"type": "string"
					},
					{
						"internalType": "uint32",
						"name": "maxTokens",
						"type": "uint32"
					},
					{
						"internalType": "int8",
						"name": "presencePenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "responseFormat",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "seed",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "stop",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "temperature",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "topP",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "tools",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "toolChoice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "user",
						"type": "string"
					}
				],
				"internalType": "struct IOracle.LlmRequest",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "createLlmCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptCallbackId",
				"type": "uint256"
			}
		],
		"name": "createLlmCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptCallbackId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "model",
						"type": "string"
					},
					{
						"internalType": "int8",
						"name": "frequencyPenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "logitBias",
						"type": "string"
					},
					{
						"internalType": "uint32",
						"name": "maxTokens",
						"type": "uint32"
					},
					{
						"internalType": "int8",
						"name": "presencePenalty",
						"type": "int8"
					},
					{
						"internalType": "string",
						"name": "responseFormat",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "seed",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "stop",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "temperature",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "topP",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "tools",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "toolChoice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "user",
						"type": "string"
					}
				],
				"internalType": "struct IOracle.OpenAiRequest",
				"name": "config",
				"type": "tuple"
			}
		],
		"name": "createOpenAiLlmCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "functionCallbackAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "functionCallbackIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "functionInputs",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "functionTypes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "functionsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
			}
		],
		"name": "getMessages",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
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
			}
		],
		"name": "getRoles",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "groqConfigurations",
		"outputs": [
			{
				"internalType": "string",
				"name": "model",
				"type": "string"
			},
			{
				"internalType": "int8",
				"name": "frequencyPenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "logitBias",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "maxTokens",
				"type": "uint32"
			},
			{
				"internalType": "int8",
				"name": "presencePenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "responseFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "seed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "stop",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "temperature",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "topP",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "user",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isFunctionProcessed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isKbIndexingRequestProcessed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isKbQueryProcessed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isPromptProcessed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "kbIndexes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kbIndexingRequestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "kbIndexingRequestErrors",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "kbIndexingRequests",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "kbQueries",
		"outputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "query",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "num_documents",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "kbQueryCallbackAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "kbQueryCallbackIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kbQueryCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "latestAttestationOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "latestPcr0HashOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "llmConfigurations",
		"outputs": [
			{
				"internalType": "string",
				"name": "model",
				"type": "string"
			},
			{
				"internalType": "int8",
				"name": "frequencyPenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "logitBias",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "maxTokens",
				"type": "uint32"
			},
			{
				"internalType": "int8",
				"name": "presencePenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "responseFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "seed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "stop",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "temperature",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "topP",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tools",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toolChoice",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "user",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "functionId",
				"type": "uint256"
			}
		],
		"name": "markFunctionAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			}
		],
		"name": "markGroqPromptAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kbIndexingRequestId",
				"type": "uint256"
			}
		],
		"name": "markKnowledgeBaseAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "kbQueryId",
				"type": "uint256"
			}
		],
		"name": "markKnowledgeBaseQueryAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			}
		],
		"name": "markOpenAiPromptAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "promptId",
				"type": "uint256"
			}
		],
		"name": "markPromptAsProcessed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "openAiConfigurations",
		"outputs": [
			{
				"internalType": "string",
				"name": "model",
				"type": "string"
			},
			{
				"internalType": "int8",
				"name": "frequencyPenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "logitBias",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "maxTokens",
				"type": "uint32"
			},
			{
				"internalType": "int8",
				"name": "presencePenalty",
				"type": "int8"
			},
			{
				"internalType": "string",
				"name": "responseFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "seed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "stop",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "temperature",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "topP",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tools",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "toolChoice",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "user",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pcr0Hashes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "promptCallbackIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "promptType",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "promptTypes",
		"outputs": [
			{
				"internalType": "string",
				"name": "defaultType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "openAi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "groq",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "promptsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressToWhitelist",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isWhitelisted",
				"type": "bool"
			}
		],
		"name": "updateWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

module.exports = {
  FHENIX_RPC_URL,
  ORACLE_ADDRESS,
  ORACLE_ABI
};
