var sounds1 = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];

function playSample(samplenumber: number): void {
    var allsounds: HTMLAudioElement = new Audio(sounds1[samplenumber]);
    allsounds.play();
    if (recording == true) {
        beat.push(sounds1[samplenumber]);
    }
}

document.querySelector(".button1").addEventListener("click", function () { playSample(0); });
document.querySelector(".button2").addEventListener("click", function () { playSample(1); });
document.querySelector(".button3").addEventListener("click", function () { playSample(2); });
document.querySelector(".button4").addEventListener("click", function () { playSample(3); });
document.querySelector(".button5").addEventListener("click", function () { playSample(4); });
document.querySelector(".button6").addEventListener("click", function () { playSample(5); });
document.querySelector(".button7").addEventListener("click", function () { playSample(6); });
document.querySelector(".button8").addEventListener("click", function () { playSample(7); });
document.querySelector(".button9").addEventListener("click", function () { playSample(8); });

//Beat als Loop
var beat: string[] = ["G.mp3", "snare.mp3", "drum.mp3", "hihat.mp3"];
var meinInterval: number;
function defbeat(): void {
    var meineZaehlervariable: number = 0;
    console.log(meineZaehlervariable);
    console.log(beat[meineZaehlervariable]);

    meinInterval = setInterval(function () {
        var playAudio: HTMLAudioElement = new Audio(beat[meineZaehlervariable]);
        playAudio.play();
        meineZaehlervariable++;
        if (meineZaehlervariable >= 3) {
            meineZaehlervariable = 0;
        }
    },                         500);
}

//Playbutton mit Stopbutton
var playbutton = document.querySelector("#play");
playbutton.addEventListener("click", function () {
    if (playbutton.getAttribute("class") == "fas fa-play") {
        playbutton.setAttribute("class", "fas fa-pause");
        defbeat();
    }
    else {
        playbutton.setAttribute("class", "fas fa-play");
        clearInterval(meinInterval);
    }
});

// Delete-Button
document.querySelector("#trash").addEventListener("click", function () { loeschbeat(); });
function loeschbeat(): void {
    beat.length = 0;
}

// Record - Icon
var recording: boolean = false;
function microfon(): void {
    if (recording == false) {
        recording = true;
    }
    else {
        recording = false;
    }
  

    document.querySelector("#record").addEventListener("click", microfon);


//inspiriert von Emma, Markus, Hannah