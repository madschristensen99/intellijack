# IntelliJack: AI Oracle Service on Fhenix

IntelliJack is an AI oracle service built on Fhenix, providing inference over private data with on-chain outcomes. This innovative project combines the power of AI with blockchain technology, offering a unique solution for developers seeking to integrate advanced AI functionalities into their decentralized applications.

## 📚 Background & Story

IntelliJack began its journey on Galadriel's devnet, which was originally conceived as an "L1 for AI". However, when Galadriel pivoted and deprecated their AI oracle service, I realized I needed to develop my own AI oracle sollution to ensure continuity and expand its capabilities.

To preserve the functionality of existing dApps and unlock new possibilities, IntelliJack reimagined an oracle service to be built on Lit Protocol. This strategic shift enables the service to operate on any EVM chain, significantly broadening its applicability and reach.

The migration to Fhenix  not only maintained the project's core functionalitiess but also introduced groundbreaking features, particularly in handling private data for AI inference. 

A key innovation in this iteration is the introduction of an agent struct within the oracle contract. This addition facilitates functionality similar to OpenAI's GPTs, opening up new avenues for AI-driven decentralized applications.

To showcase the potential of this system, we've developed a basic Agent marketplace. Here, users can create agents and modify them with secret attributes, simulating a dynamic economy of AI entities.

Furthermore, we've created a smart contract for Story Protocol that demonstrates how this AI-driven economy could function in practice. This integration illustrates the potential for narrative-driven, AI-powered experiences in the blockchain space.

## 🌟 Features

- AI inference over private data
- On-chain outcomes
- Agent marketplace for creating and modifying AI agents
- Integration with Story Protocol for simulating AI economy
- Cross-chain compatibility (previously Galadriel, now on any EVM chain via Lit Protocol)

## 🗂️ Project Structure

### Core Components
- `chatOracleWithAgents.sol`: Main smart contract for the AI oracle service
- `lit.js`: Node.js script to run the Lit Protocol integration
- `litAction.js`: Lit Action script for cross-chain compatibility
- `constants.js`: Configuration constants for the project

### Frontend
- `index.html`: Main HTML file for the web interface

### Smart Contracts
- `storyGPTs.sol`: Smart contract for Story Protocol integration

### Documentation
- `README.md`: This file, containing project overview and instructions

## 🚀 Getting Started

To run the project:

1. Clone this repository
2. Install dependencies (if any)
3. Run the Lit Protocol integration:
## 🔗 Deployed Contracts

- Fhenix Oracle: [0xBFF88fbFE933f4E8e53050AF6c8F751a75fE77BE](https://explorer.helium.fhenix.zone/address/0xBFF88fbFE933f4E8e53050AF6c8F751a75fE77BE)
- Story Protocol Contract: [View on StoryScan](https://testnet.storyscan.xyz/tx/0x8d5f073dd52e5c0608f4047e87e0d8eaeb99b3261873dab5660286fb83ed1b80)

## 🛠️ Technologies Used

- Fhenix
- Lit Protocol
- Solidity
- JavaScript
- HTML/CSS

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](link-to-your-issues-page) if you want to contribute.

## 📄 License

This project is [MIT](link-to-your-license-file) licensed.

## 🙏 Acknowledgements

- Galadriel team for the initial inspiration and [contract templates](https://github.com/galadriel-ai/contracts/tree/main/contracts/contracts)
- Fhenix team for providing the platform for private data inference
- Lit Protocol team for enabling cross-chain compatibility

---

Built with ❤️ by [Your Name/Team Name]
