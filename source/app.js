const Data = document.getElementById('data')
const generateBtn = document.querySelector('.generate-btn')
const downloadBtn = document.querySelector('#dbtn')

generateBtn.addEventListener('click', generateQR)
downloadBtn.addEventListener('click', downloadQR)


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
    document.querySelector('#dbtn').setAttribute('data-hidden', 'false')
}

function downloadQR(){
    const canvas = document.createElement('canvas')
    const img = document.querySelector('.qr-section img')
    canvas.height = img.height
    canvas.width = img.width
    const ctx = canvas.getContext('2d')

    // fixing Tainted Canvases can't be exported error 
    img.setAttribute('crossorigin', 'anonymouse')

    // Drawing QR to canvas so that it can be downloaded
    ctx.drawImage(img, 0, 0, canvas.height, canvas.width)

    // downloading 
    const image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream")
    const link = document.createElement('a')
    link.download = "QrCode.png"
    link.href = image
    link.click()
}