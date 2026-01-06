import { GeneratePDF } from "./jsPDF.js";

var backColor = "#1166BB";
var lineColor = "#444444";
var courtColor = "#D7AC70";
var logoImg = "../files/favicon/favicon-48x48.png"

function getInputs() {
    backColor = document.querySelector("#backgroundInput").value;
    lineColor = document.querySelector("#lineInput").value;
    courtColor = document.querySelector("#courtInput").value;
    logoImg = document.querySelector("#logoInput").value;
}

const myPdf = new GeneratePDF();

myPdf.setFillingColor(backColor);
myPdf.addRect(0, 0, 300, 1000);
myPdf.setFillingColor(lineColor);
myPdf.addRect(21.5, 21.5, 257, 137);
myPdf.addImg("../files/courtDesign/standardCourt.png", 0, 0, 300, 180.36);
myPdf.addImg(logoImg, 130, 70.18, 40, 40)

document.querySelector("#pdfPreview").src = myPdf.getPdfUrl();