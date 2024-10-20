Intellijack is an AI oracle service built on Fhenix providing inference over private data with onchain outcomes. 

Over the past several months I have been developing on Galadriel's devnet ("L1 for AI"). However they are pivoting and have deprecated their AI oracle service. In order to ensure that I can still use my old dApps, I created an oracle service on Lit Protocol that can provide the same service that I once had on only Galadriel's chain to any EVM chain. Deploying the oracle on Fhenix unlocks numerous capabilities that were unavailable on Galadriel as the AI service can now inference over private data. To demonstrate this, I have developed a basic Agent marketplace where people can create agents, modify them to have secret attributes, and license their outputs through story protocol. 

Source of Galadriel oracle contracts:
https://github.com/galadriel-ai/contracts/tree/main/contracts/contracts
