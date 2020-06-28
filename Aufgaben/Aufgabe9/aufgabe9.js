var myList = [];
var index = 0;
function drawList() {
    document.querySelector("#todos").innerHTML = ("");
    for (let index = 0; index < myList.length; index++) {
        console.log(myList[index]);
        document.querySelector("#todos").innerHTML += "<li id='liste'>" + "<input type='checkbox' id= 'done'>" + myList[index] + "<i class='fas fa-trash-alt'>" + "</i> " + "</li>";
        //Delete
        document.querySelector(".fa-trash-alt").addEventListener("click", function () {
            console.log("entfernen");
            myList.slice(index);
            var element = document.getElementById("liste");
            element.parentNode.removeChild(element);
        });
    }
    //Zählen der todos/ Inspiriert von Moritz
    var insgesamt = document.querySelector("#alletodos");
    insgesamt.innerHTML = "Insgesamt zu erledigen:" + myList.length;
}
document.querySelector("#button").addEventListener("click", addNewElement);
function addNewElement() {
    var neuerToDo = document.querySelector("#eingabefeld").value;
    console.log("Textfeld speichern");
    myList.push(neuerToDo);
    drawList();
}
drawList();
//# sourceMappingURL=aufgabe9.js.map