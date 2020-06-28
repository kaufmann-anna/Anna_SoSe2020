var myList: string[] = [];

var index: number = 0;

function drawList() {

    document.querySelector("#todos").innerHTML = ("");

    for (let index = 0; index < myList.length; index++) {
        console.log(myList[index]);
        document.querySelector("#todos").innerHTML += "<li id='liste'>" + "<input type='checkbox' id= 'done'>" + myList[index] + "<i class='fas fa-trash-alt'>" + "</i> " + "</li>";

        //Delete
        document.querySelector(".fa-trash-alt").addEventListener("click", function: void {
            console.log("entfernen");
        
        });
    }
    //Zählen der todos
    var insgesamt: HTMLElement = document.querySelector("#alletodos");
    insgesamt.innerHTML = "Insgesamt zu erledigen:" + myList.length;

}


document.querySelector("#button").addEventListener("click", addNewElement);

function addNewElement(): void {

    var neuerToDo: string = document.querySelector("#eingabefeld").value;
    console.log("Textfeld speichern");
    myList.push(neuerToDo);

    drawList();

}

drawList();

//Delete an item -> funktioniert nicht:/



