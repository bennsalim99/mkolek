let trackingCodes = JSON.parse(localStorage.getItem('trackingCodes')) || []; // Daha önce girilen kargo kodlarını al

document.getElementById('tracking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const trackingCode = document.getElementById('tracking-code').value;
    trackingCodes.push(trackingCode); // Kullanıcı tarafından girilen kargo kodunu diziye ekle
    localStorage.setItem('trackingCodes', JSON.stringify(trackingCodes)); // Kargo kodlarını sakla

    const resultDiv = document.getElementById('tracking-result');

    // Örnek kargo durumu verisi
    const statuses = ["Dağıtımda", "Yolda", "Teslim Edildi"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    resultDiv.innerHTML = `Kargo kodu: <strong>${trackingCode}</strong> için durum: <strong>${randomStatus}</strong>`;
});