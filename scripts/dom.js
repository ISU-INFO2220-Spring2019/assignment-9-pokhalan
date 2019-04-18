// Alankar Pokhrel
// 1/31/2019
// Info2220
// Jon Holmes
// Assignment 6
// Purpose:THis is a script to be used in  dom.html.

var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var ages = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var innerText = document.getElementById("pOne").innerText;
    alert(innerText);

}

function showInnerHTML() {
    var innerHtml = document.getElementById("pOne").innerHTML;
    alert(innerHtml);

}

function numberList() {
    var ul = document.getElementsByTagName("ul");
    //Select first ul element and get all list items
    liItems = ul[0].getElementsByTagName("li");
    for (var i = 0; i < liItems.length; i++) {
        var text = document.createTextNode(i + 1);
        liItems[i].appendChild(text);
    }
}

function markRows() {
    var tblMarkRows = document = document.getElementById("tblMarkRows");
    var trs = tblMarkRows.getElementsByTagName("tr");
    for (var i = 1; i < trs.length; i += 2) {
        trs[i].classList.add("other");

    }
}
function addRows() {
    var tblAddRows = document.getElementById("tblAddRows");
    for (var i = 0; i < firstNames.length; i++) {
        var tr = document.createElement("tr");
        if(i%2 == 0){
            tr.classList.add("other");
        }

        var tdFName = document.createElement("td");
        var tdLName = document.createElement("td");
        var tdAge = document.createElement("td");

        tdFName.innerText = firstNames[i];
        tdLName.innerText = lastNames[i];
        tdAge.innerText = ages[i];

        tr.appendChild(tdFName);
        tr.appendChild(tdLName);
        tr.appendChild(tdAge);

        tblAddRows.appendChild(tr);

    }

}

function addSuccess() {
    var divMessages = document.getElementById("divMessages");
    var divSuccess = document.createElement("div");
    divSuccess.classList.add("success");
    divSuccess.innerText = "This is Success Message.";
    divMessages.appendChild(divSuccess);

}

function addWarning() {
    var divMessages = document.getElementById("divMessages");
    var divWarning = document.createElement("div");
    divWarning.classList.add("warning");
    divWarning.innerText = "This is Warning message.";
    divMessages.appendChild(divWarning);

}

function addError() {
    var divMessages = document.getElementById("divMessages");
    var divError = document.createElement("div");
    divError.classList.add("error");m
    
    divError.innerText = "This is Error Message";
    divMessages.appendChild(divError);

}





