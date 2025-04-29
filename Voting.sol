// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Voting {
    address public admin;
    bool public votingOpen;

    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 vote;
    }

    struct Candidate {
        string name;
        string aadharHash;
        string panHash;
        string affidavitHash;
        uint256 voteCount;
    }

    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    event VoterRegistered(address voter);
    event CandidateRegistered(string name);
    event VoteCasted(address voter, uint256 candidateIndex);
    event VotingOpened();
    event VotingClosed();

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier votingIsOpen() {
        require(votingOpen, "Voting is not open");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Register a new voter
    function registerVoter(address _voterAddress) external onlyAdmin {
        require(!voters[_voterAddress].isRegistered, "Already registered");
        voters[_voterAddress] = Voter(true, false, 0);
        emit VoterRegistered(_voterAddress);
    }

    // Add a candidate (admin only)
    function registerCandidate(
        string memory _name,
        string memory _aadharHash,
        string memory _panHash,
        string memory _affidavitHash
    ) external onlyAdmin {
        candidates.push(Candidate(_name, _aadharHash, _panHash, _affidavitHash, 0));
        emit CandidateRegistered(_name);
    }

    // Start voting
    function openVoting() external onlyAdmin {
        votingOpen = true;
        emit VotingOpened();
    }

    // Stop voting
    function closeVoting() external onlyAdmin {
        votingOpen = false;
        emit VotingClosed();
    }

    // Cast a vote
    function vote(uint256 _candidateIndex) external votingIsOpen {
        Voter storage sender = voters[msg.sender];
        require(sender.isRegistered, "Not a registered voter");
        require(!sender.hasVoted, "You have already voted");
        require(_candidateIndex < candidates.length, "Invalid candidate");

        sender.hasVoted = true;
        sender.vote = _candidateIndex;
        candidates[_candidateIndex].voteCount += 1;

        emit VoteCasted(msg.sender, _candidateIndex);
    }

    // Get total number of candidates
    function getTotalCandidates() public view returns (uint256) {
        return candidates.length;
    }

    // Get details of a candidate
    function getCandidate(uint256 index) public view returns (
        string memory name,
        uint256 voteCount
    ) {
        require(index < candidates.length, "Invalid index");
        Candidate memory c = candidates[index];
        return (c.name, c.voteCount);
    }

    // Get the winner
    function getResults() public view returns (string memory winnerName, uint256 winnerVoteCount) {
        uint256 highest = 0;
        uint256 winnerIndex = 0;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highest) {
                highest = candidates[i].voteCount;
                winnerIndex = i;
            }
        }

        return (candidates[winnerIndex].name, candidates[winnerIndex].voteCount);
    }
}