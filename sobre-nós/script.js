let botHistory = document.getElementById("bot-hist");
let historySection = document.getElementById("hist-section");
let seta = document.getElementById("seta");

botHistory.addEventListener("click", () => {
    if(historySection.style.display == "inherit") {
        historySection.style.display = "none";
        seta.style.transform = "rotateZ(0)";
    } else if(historySection.style.display == "none") {
        historySection.style.display = "inherit";
        seta.style.transform = "rotateZ(180deg)";
    }
})
