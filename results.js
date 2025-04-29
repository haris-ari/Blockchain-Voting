window.addEventListener("load", async () => {
    try {
        const result = await contract.getVotingResults();
        let resultText = "<h3>Voting Results</h3>";
        result.forEach(candidate => {
            resultText += `<p>Candidate: ${candidate.name} | Votes: ${candidate.voteCount}</p>`;
        });
        document.getElementById("results").innerHTML = resultText;
    } catch (error) {
        console.error(error);
        alert("Error fetching results.");
    }
});