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
var australia18 = 2100.5;
var australia08 = 1993;
var prozentaus = 5.39;
var anteilaus = 7;
var nordam18 = 6035.6;
var nordam08 = 6600.4;
var prozentnam = 8.56;
var anteilnam = 19;
var sudam18 = 1261.5;
var sudam08 = 1132.6;
var prozentsam = 11.4;
var anteilsam = 4;
var gesWe = euro18 + africa18 + asien18 + australia18 + nordam18 + sudam18;
function europe(euro18, anteileu, prozenteu, euro08) {
    console.log("Europa");
    console.log("Die Emission von Europa ist: " + euro18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + anteileu + "%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um  " + prozenteu + "% verändert ");
    console.log("2018 im Vergleich zu 2008 sind das " + (euro18 - euro08) + " kg CO2");
}
europe(4209.3, 16, 17.97, 4965.7);
document.querySelector("Image").addEventListener('click', europe);
function africa(africa18, anteilaf, prozentaf, africa08) {
    console.log("Africa");
    console.log("Die Emission von Africa ist: " + africa18 + " kg CO2");
    console.log("Relativ zur Gesamtemission der Welt verursacht Africa damit " + anteilaf + "%");
    console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentaf + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + (africa18 - africa08) + "kg CO2");
}
africa(1235.5, 4, 20.19, 1028);
console.log("Asien");
console.log("Die Emission von Asien ist: " + asien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + anteilas + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentas + "& verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (asien18 - asien08) + "kg CO2");
console.log("Australien");
console.log("Die Emission von Australien ist: " + australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + anteilaus + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentaus + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (australia18 - australia08) + "kg CO2");
console.log("Nord-Amerika");
console.log("Die Emission von Nprd-Amerika ist: " + nordam18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit " + anteilnam + "%");
console.log("Für Nord-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentnam + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (nordam18 - nordam08) + "kg CO2");
console.log("Süd-Amerika");
console.log("Die Emission von Süd-Amerika ist: " + sudam18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit " + anteilsam + "%");
console.log("Für Süd-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + prozentsam + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (sudam18 - sudam08) + "kg CO2");
//# sourceMappingURL=script.js.map