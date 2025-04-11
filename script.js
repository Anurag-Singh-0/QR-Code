let qrInput = document.querySelector("#qr-input");
let qrImg = document.querySelector("#qr-img");
let imgBox = document.querySelector(".qr-img-box");

function generateQrCode() {
  if (qrInput.value.length > 0) {
    let val = qrInput.value;
    let finalURL = qrImg.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` +
      encodeURIComponent(val);
    imgBox.classList.add("show");

    qrInput.value = "";

  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
  }
}

qrInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    generateQrCode();
  }
});
