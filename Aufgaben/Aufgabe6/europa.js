var euro18 = 4209.3;
var euro08 = 4965.7;
var prozenteu = 17.97;
var anteileu = 16;
var africa18 = 1235.5;
var africa08 = 1028;
var prozentaf = 20.19;
var anteilaf = 4;
var asien18 = 16274.1;
var asien08 = 12954.7;
var prozentas = 25.62;
var anteilas = 52;
var sudam18 = 1261.5;
var sudam08 = 1132.6;
var prozentsam = 11.4;
var anteilsam = 4;
var australia18 = 2100.5;
var australia08 = 1993;
var prozentaus = 5.39;
var anteilaus = 7;
var nordam18 = 6035.6;
var nordam08 = 6600.4;
var prozentnam = 8.56;
var anteilnam = 19;
function europa() {
    console.log("Europa");
    console.log("Die Emission von Europa ist: " + euro18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + anteileu + "%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um  " + prozenteu + "% verändert ");
    console.log("2018 im Vergleich zu 2008 sind das " + (euro18 - euro08) + " kg CO2");
}
europa();
document.querySelector(".europe")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emission in Europa";
    document.querySelector(".emissionabprozent").innerHTML = euro18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".emissionrelative").innerHTML = prozenteu.toString() + "%";
    document.querySelector(".growthrate").innerHTML = anteileu.toString() + "%";
    document.querySelector(".growthrateabsolute").innerHTML = (euro18 - euro08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteileu + "px");
});
function afrika() {
    console.log("Africa");
    console.log("Die Emission von Africa ist: " + africa18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Africa damit " + anteilaf + "%");
    console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentaf + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (africa18 - africa08) + "kg CO2");
}
afrika();
document.querySelector(".africa")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emissions in Afrika";
    document.querySelector(".emissionabprozent").innerHTML = africa18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".emissionrelative").innerHTML = prozentaf.toString() + "%";
    document.querySelector(".growthrate").innerHTML = anteilaf.toString() + "%";
    document.querySelector(".growthrateabsolute").innerHTML = (africa18 - africa08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteilaf + "px");
});
function asien() {
    console.log("Asien");
    console.log("Die Emission von Asien ist: " + asien18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + anteilas + "%");
    console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentas + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (asien18 - asien08) + "kg CO2");
}
asien();
document.querySelector(".asia")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emissions in Asien";
    document.querySelector(".emissionabprozent").innerHTML = asien18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Asien in 2018";
    document.querySelector(".emissionrelative").innerHTML = prozentas.toString() + "%";
    document.querySelector(".growthrate").innerHTML = anteilas.toString() + "%";
    document.querySelector(".growthrateabsolute").innerHTML = (asien18 - asien08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteilas + "px");
});
function australien() {
    console.log("Australien");
    console.log("Die Emission von Australien ist: " + australia18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + anteilaus + " %");
    console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentaus + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (australia18 - australia08) + "kg CO2");
}
australien();
document.querySelector(".australia")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emissions in Australien";
    document.querySelector(".emissionabprozent").innerHTML = australia18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".emissionrelative").innerHTML = prozentaus.toString() + "%";
    document.querySelector(".growthrate").innerHTML = anteilaus.toString() + "%";
    document.querySelector(".growthrateabsolute").innerHTML = (australia18 - australia08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteilaus + "px");
});
function nordamerica() {
    console.log("Nord-Amerika");
    console.log("Die Emission von Nprd-Amerika ist: " + nordam18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit " + anteilnam + "%");
    console.log("Für Nord-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentnam + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (nordam18 - nordam08) + "kg CO2");
}
nordamerica();
document.querySelector(".northamerica")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emissions in Nordamerika";
    document.querySelector(".emissionabprozent").innerHTML = nordam18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector(".emissionrelative").innerHTML = prozentnam.toString() + "%";
    document.querySelector(".growthrate").innerHTML = anteilnam.toString() + "%";
    document.querySelector(".growthrateabsolute").innerHTML = (nordam18 - nordam08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteilnam + "px");
});
function sudamerica() {
    console.log("Süd-Amerika");
    console.log("Die Emission von Süd-Amerika ist: " + sudam18 + "kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit " + anteilsam + "%");
    console.log("Für Süd-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentsam + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (sudam18 - sudam08) + "kg CO2");
}
sudamerica();
document.querySelector(".southamerica")?.addEventListener("click", function () {
    document.querySelector(".heading").innerHTML = "Carbon Dioxide Emissions in Südamerika";
    document.querySelector(".emissionabprozent").innerHTML = sudam18.toString();
    document.querySelector(".textemissionab").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector("emissionrelative").innerHTML = prozentsam.toString() + "%";
    document.querySelector("growthrate").innerHTML = anteilsam.toString() + "%";
    document.querySelector("growthrateabsolute").innerHTML = (sudam18 - sudam08).toString();
    document.querySelector(".chart")?.setAttribute("style", "height:" + anteilsam + "px");
});
//# sourceMappingURL=europa.js.map