let lastPdfDivOpen;

document.addEventListener("keydown", function(event) {
    if(event.key == "Escape") {
        if(lastPdfDivOpen) {
            closeLastPdf();
        }
    }
})

function closeLastPdf() {
    lastPdfDivOpen.style.display = "none";
}

function showPdf(idNumber) {
    lastPdfDivOpen = document.getElementById('motores-pdf-div-' + idNumber);
    lastPdfDivOpen.style.display = "flex";
}
