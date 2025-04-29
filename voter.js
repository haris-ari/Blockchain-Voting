document.getElementById("voter-registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const voterName = document.getElementById("voterName").value;
    const voterId = document.getElementById("voterId").value;

    try {
        const tx = await contract.registerVoter(voterName, voterId);
        await tx.wait();
        alert("Voter registered successfully!");
    } catch (error) {
        console.error(error);
        alert("Error registering voter.");
    }
});