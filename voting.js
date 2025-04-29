document.getElementById("voting-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const candidateId = document.getElementById("candidateId").value;

    try {
        const tx = await contract.vote(candidateId);
        await tx.wait();
        alert("Vote cast successfully!");
    } catch (error) {
        console.error(error);
        alert("Error casting vote.");
    }
});