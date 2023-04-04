// Get the DOM elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate QR Code
function generateQR() {
    // Generate QR Code when input field is not empty
    if(qrText.value.length > 0) {
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imgBox.classList.add("show-img");
    } else {
    // Don't Generate QR Code when input field is empty
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        },1000);
    }
    
}