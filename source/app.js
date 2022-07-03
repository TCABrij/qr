const Data = document.getElementById('data')
const generateBtn = document.querySelector('.generate-btn')

generateBtn.addEventListener('click', generateQR)

function generateQR(){
    let data = Data.value

    if(!data){
        alert("Enter text or url to generate QR Code")
        return
    }

    let height = document.querySelector('#height').value || 350
    let width = document.querySelector('#width').value || 350

    const QRCode = `https://chart.apis.google.com/chart?cht=qr&chs=${Number(height)}x${Number(width)}&chl=${data}`

    appendQR(QRCode)
}

function appendQR(QRCode){
    let img = document.querySelector('#qrCode img')
    img.src = QRCode
}