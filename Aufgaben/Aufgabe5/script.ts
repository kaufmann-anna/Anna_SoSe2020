var euro18: number = 4209.3;
var euro08: number = 4965.7;
var prozenteu: number = 17.97;
var anteileu: number = 16;

var africa18: number = 1235.5;
var africa08: number = 1028;
var prozentaf: number = 20.19;
var anteilaf: number = 4;

var asien18: number = 16274.1;
var asien08: number = 12954.7;
var prozentas: number = 25.62; 
var anteilas: number = 52;

var australia18: number = 2100.5;
var australia08: number = 1993;
var prozentaus: number = 5.39;
var anteilaus: number = 7;

var nordam18: number = 6035.6;
var nordam08: number = 6600.4;
var prozentnam: number = 8.56;
var anteilnam: number = 19;

var sudam18: number = 1261.5;
var sudam08: number = 1132.6;
var prozentsam: number = 11.4;
var anteilsam: number = 4;

var gesWe: number = euro18 + africa18 + asien18 + australia18 + nordam18 + sudam18;


console.log("Europa");
console.log("Die Emission von Europa ist: " + euro18 + " kg CO2");
/*Um den prozentualen Anteil auszurechenen berechne ich den Wert mal hundert und Teile das Ergebnis durch gesWe. Ich habe den Wert unter var anteilxy vermerkt.*/
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + anteileu + "%");
/*Subtrahiere den alten vom neuen Wert. Teile das Ergebnis durch den Wert von alten Wert. Multipliziere das Ergbenis mit 100, um einen Prozentwert zu bekommen. Ich hab den Wert vorher berechnet und in eine variable (var prozentxy) hineingeschrieben.*/
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um  " + prozenteu + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das " + (euro18 - euro08) + " kg CO2");

console.log("Africa");
console.log("Die Emission von Africa ist: " + africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Africa damit " + anteilaf + "%");
console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um " + anteilaf + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (africa18 - africa08) + "kg CO2");

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