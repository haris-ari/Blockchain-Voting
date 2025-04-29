document.getElementById("candidate-registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const candidateName = document.getElementById("candidateName").value;
    const candidateId = document.getElementById("candidateId").value;

    try {
        const tx = await contract.registerCandidate(candidateName, candidateId);
        await tx.wait();
        alert("Candidate registration successful, waiting for admin approval!");
    } catch (error) {
        console.error(error);
        alert("Error registering candidate.");
    }
});