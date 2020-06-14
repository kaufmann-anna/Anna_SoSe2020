var buttons: string = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9"];

/*7.1*/
var sounds: HTMLAudioElement [] = [];
sounds.push (new Audio ("A.mp3"));
sounds.push (new Audio ("C.mp3"));
sounds.push (new Audio ("F.mp3"));
sounds.push (new Audio ("G.mp3"));
sounds.push (new Audio ("hihat.mp3"));
sounds.push (new Audio ("kick.mp3"));
sounds.push (new Audio ("laugh-1.mp3"));
sounds.push (new Audio ("laugh-2.mp3"));
sounds.push (new Audio ("snare.mp3"));

function playSample(samplenumber: number): void {
    sounds[samplenumber].play();
}
/*playSample();*/

document.querySelector(".button1")?.addEventListener("click", function() {playSample(0); });
document.querySelector(".button2")?.addEventListener("click", function() {playSample(1); });
document.querySelector(".button3")?.addEventListener("click", function() {playSample(2); });
document.querySelector(".button4")?.addEventListener("click", function() {playSample(3); });
document.querySelector(".button5")?.addEventListener("click", function() {playSample(4); });
document.querySelector(".button6")?.addEventListener("click", function() {playSample(5); });
document.querySelector(".button7")?.addEventListener("click", function() {playSample(6); });
document.querySelector(".button8")?.addEventListener("click", function() {playSample(7); });
document.querySelector(".button9")?.addEventListener("click", function() {playSample(8); });

/* 7.2.*/
/*inspiriert von Anette im Praktikum*/
function defBeat(): void {
    setInterval(function(){
        playSample(4); playSample(5); playSample(8);
    }, 300);
}
document.querySelector("img").addEventListener("click", defBeat);