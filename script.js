const input = document.getElementById("apikey");

function randomKey(length = 32) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let hasil = "";
    for (let i = 0; i < length; i++) {
        hasil += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return "PT-" + hasil;
}

function generateKey() {
    input.value = randomKey();
}

function copyKey() {
    if (!input.value) {
        alert("Generate API Key dulu.");
        return;
    }

    navigator.clipboard.writeText(input.value);
    alert("API Key berhasil disalin.");
}
