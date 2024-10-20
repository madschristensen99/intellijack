
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../starforge/contracts/interfaces/registries/IIPAssetRegistry.sol";
import "../starforge/contracts/interfaces/modules/licensing/ILicensingModule.sol";
import "../starforge/contracts/interfaces/modules/royalty/IRoyaltyModule.sol";
import "../starforge/contracts/interfaces/ILicenseToken.sol";

contract Intellijack is ERC721, Ownable {
    using Counters for Counters.Counter;
    using SafeERC20 for IERC20;

    Counters.Counter private _agentIds;
    Counters.Counter private _datasetIds;

    struct Agent {
        string name;
        string description;
        uint256 licenseTokenId;
        address creator;
        uint256[] datasetIds;
    }

    struct Dataset {
        string name;
        string description;
        uint256 licenseTokenId;
        address creator;
    }

    mapping(uint256 => Agent) public agents;
    mapping(uint256 => Dataset) public datasets;

    IIPAssetRegistry public ipAssetRegistry;
    ILicensingModule public licensingModule;
    IRoyaltyModule public royaltyModule;
    ILicenseToken public licenseToken;
    IERC20 public paymentToken;

    uint256 public agentCreationFee;
    uint256 public datasetCreationFee;
    uint256 public constant PLATFORM_SHARE = 10;

    event AgentCreated(uint256 indexed agentId, address creator, string name);
    event DatasetCreated(uint256 indexed datasetId, address creator, string name);
    event AgentUpdated(uint256 indexed agentId, string name, string description);
    event DatasetUpdated(uint256 indexed datasetId, string name, string description);
    event RoyaltyPaid(uint256 indexed assetId, address indexed recipient, uint256 amount);

    constructor(
        uint256 _initialAgentCreationFee,
        uint256 _initialDatasetCreationFee,
        address _paymentTokenAddress
    ) ERC721("Intellijack", "IJACK") Ownable(msg.sender) {
        ipAssetRegistry = IIPAssetRegistry(0x1a9d0d28a0422F26D31Be72Edc6f13ea4371E11B);
        licensingModule = ILicensingModule(0xd81fd78f557b457b4350cB95D20b547bFEb4D857);
        royaltyModule = IRoyaltyModule(0x3C27b2D7d30131D4b58C3584FD7c86e3358744de);
        licenseToken = ILicenseToken(0xc7A302E03cd7A304394B401192bfED872af501BE);
        paymentToken = IERC20(_paymentTokenAddress);
        agentCreationFee = _initialAgentCreationFee;
        datasetCreationFee = _initialDatasetCreationFee;
    }

    function createAgent(string memory name, string memory description, uint256[] memory datasetIds) public returns (uint256) {
        paymentToken.safeTransferFrom(msg.sender, address(this), agentCreationFee);

        _agentIds.increment();
        uint256 newAgentId = _agentIds.current();
        _safeMint(msg.sender, newAgentId);

        // Register the agent as an IP Asset
        ipAssetRegistry.register(block.chainid, address(this), newAgentId);

        // Create license for the agent
        uint256 licenseTokenId = _createLicense(msg.sender, newAgentId);

        agents[newAgentId] = Agent(name, description, licenseTokenId, msg.sender, datasetIds);
        emit AgentCreated(newAgentId, msg.sender, name);

        return newAgentId;
    }

    function createDataset(string memory name, string memory description) public returns (uint256) {
        paymentToken.safeTransferFrom(msg.sender, address(this), datasetCreationFee);

        _datasetIds.increment();
        uint256 newDatasetId = _datasetIds.current();
        _safeMint(msg.sender, newDatasetId);

        // Register the dataset as an IP Asset
        ipAssetRegistry.register(block.chainid, address(this), newDatasetId);

        // Create license for the dataset
        uint256 licenseTokenId = _createLicense(msg.sender, newDatasetId);

        datasets[newDatasetId] = Dataset(name, description, licenseTokenId, msg.sender);
        emit DatasetCreated(newDatasetId, msg.sender, name);

        return newDatasetId;
    }

    function _createLicense(address creator, uint256 assetId) internal returns (uint256) {
        address[] memory beneficiaries = new address[](2);
        uint256[] memory shares = new uint256[](2);
        
        beneficiaries[0] = creator;
        beneficiaries[1] = owner();
        shares[0] = 100 - PLATFORM_SHARE;
        shares[1] = PLATFORM_SHARE;

        bytes memory royaltyContext = abi.encode(beneficiaries, shares);

        return licensingModule.mintLicenseTokens(
            address(this),
            address(0), // License template address (you may need to set this appropriately)
            0, // License terms ID (you may need to set this appropriately)
            1,
            creator,
            royaltyContext
        );
    }

    function updateAgent(uint256 agentId, string memory name, string memory description) public {
        require(_exists(agentId), "Agent does not exist");
        require(ownerOf(agentId) == msg.sender, "Not the owner of the agent");
        
        Agent storage agent = agents[agentId];
        agent.name = name;
        agent.description = description;
        
        emit AgentUpdated(agentId, name, description);
    }

    function updateDataset(uint256 datasetId, string memory name, string memory description) public {
        require(_exists(datasetId), "Dataset does not exist");
        require(ownerOf(datasetId) == msg.sender, "Not the owner of the dataset");
        
        Dataset storage dataset = datasets[datasetId];
        dataset.name = name;
        dataset.description = description;
        
        emit DatasetUpdated(datasetId, name, description);
    }

    function getAgent(uint256 agentId) public view returns (string memory, string memory, uint256, address, uint256[] memory) {
        require(_exists(agentId), "Agent does not exist");
        Agent storage agent = agents[agentId];
        return (agent.name, agent.description, agent.licenseTokenId, agent.creator, agent.datasetIds);
    }

    function getDataset(uint256 datasetId) public view returns (string memory, string memory, uint256, address) {
        require(_exists(datasetId), "Dataset does not exist");
        Dataset storage dataset = datasets[datasetId];
        return (dataset.name, dataset.description, dataset.licenseTokenId, dataset.creator);
    }

    function distributeRoyalties(uint256 assetId, uint256 amount) public {
        require(_exists(assetId), "Asset does not exist");
        
        address creator = assetId <= _agentIds.current() ? agents[assetId].creator : datasets[assetId].creator;
        
        uint256 creatorAmount = (amount * (100 - PLATFORM_SHARE)) / 100;
        uint256 platformAmount = amount - creatorAmount;

        // Transfer creator share
        paymentToken.safeTransferFrom(msg.sender, creator, creatorAmount);
        emit RoyaltyPaid(assetId, creator, creatorAmount);

        // Transfer platform share
        paymentToken.safeTransferFrom(msg.sender, owner(), platformAmount);
        emit RoyaltyPaid(assetId, owner(), platformAmount);
    }

    function setAgentCreationFee(uint256 _newFee) public onlyOwner {
        agentCreationFee = _newFee;
    }

    function setDatasetCreationFee(uint256 _newFee) public onlyOwner {
        datasetCreationFee = _newFee;
    }

    function withdrawFees() public onlyOwner {
        uint256 balance = paymentToken.balanceOf(address(this));
        require(balance > 0, "No fees to withdraw");
        paymentToken.safeTransfer(owner(), balance);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }
}
