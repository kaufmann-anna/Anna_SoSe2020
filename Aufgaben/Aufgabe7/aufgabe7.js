var buttons = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button 8", "button9"];
/*Zuweisung über Destrukturierung*/
var [button1, button2, button3, button4, button5, button6, button7, button8, button9] = buttons;
var sound1 = new Audio("A.mp3");
var sound2 = new Audio("C.mp3");
var sound3 = new Audio("F.mp3");
var sound4 = new Audio("G.mp3");
var sound5 = new Audio("hihat.mp3");
var sound6 = new Audio("kick.mp3");
var sound7 = new Audio("laugh-1.mp3");
var sound8 = new Audio("laugh-2.mp3");
var sound9 = new Audio("snare-2.mp3");
sound1.play();
sound2.play();
sound3.play();
sound4.play();
sound5.play();
sound6.play();
sound7.play();
sound8.play();
sound9.play();
function playSample(sounds) {
    console.log(sound1);
    console.log(sound2);
    console.log(sound3);
    console.log(sound4);
    console.log(sound5);
    console.log(sound6);
    console.log(sound8);
    console.log(sound7);
    console.log(sound9);
}
playSample(sound1);
playSample(sound2);
playSample(sound3);
playSample(sound4);
playSample(sound5);
playSample(sound6);
playSample(sound7);
playSample(sound8);
playSample(sound9);
//# sourceMappingURL=aufgabe7.js.map