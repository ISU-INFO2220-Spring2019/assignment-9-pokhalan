// Alankar Pokhrel
// 2/12/2019
// Info2220
// Jon Holmes
// Assignment 4
// Purpose:This page is an external JS file named object.js which contains all the buttons' actions that are in a html page named object.html.


var personHolder;
var characters;
function Person(fName, lName){
    this.firstName= fName;
    this.lastName= lName;
    this.age;
    this.stepsToTake;
    this.steps=getSteps;
    this.sumOfAge=sumOddAges;
    function getSteps(){
        var ret="";
        for(var i=1; i<=this.stepsToTake;i++){
            ret+=i+" ";
        }
        return ret;
    }
    function sumOddAges(){
        var retSum=0;
        for(var j=1; j<=parseInt(this.age); j=j+1){
            if(j%2===1){
                retSum+=j;
            }
        }
        return retSum;
    }
}

function Converter(){
    this.getCelsius=getDegreesInC;
    this.getFahrenheit=getDegreesInF;
    function getDegreesInC(nFahrenheit){
        var celsius=(nFahrenheit-32)*5/9;
        return celsius;
    }
    function getDegreesInF(nCelsius){
        var fahrenheit=(nCelsius*9/5)+32;
        return fahrenheit;
    }
}

function sayHello(){
    var name=prompt("Enter your name");
        alert("Hello, "+name);
   
}
function greet(greeting){
    var name=prompt("Enter your name");
        alert(greeting+" "+name);
}

function doMaths(number1, number2){
    concatinate =""+number1+number2;
    add=number1+number2;
    substract=number1-number2;
    multiply=number1*number2;
    divide=number1/number2;
    ret=concatinate+"\r\n"+add+"\r\n"+substract+"\r\n"+multiply+"\r\n"+divide;
    alert(ret);
}

function createPerson(){
    var fName=prompt("Enter your first name");
    var lName=prompt("Enter your last name");
    var age;
    do{
        age=parseInt(prompt("Enter your age(between 1 to 200)"));
    }
    while(age<=1 || age >=200){
        personHolder=new Person(fName,lName);
        personHolder.age=age;
    }
}

function showSteps(){
    if (typeof personHolder === "undefined") {
        alert("Could you click the Fill Object button please");
    }
    personHolder.stepsToTake = 10;
    steps = personHolder.steps();
    alert(personHolder.firstName +" "+personHolder.lastName +" took steps\r\n" + steps);
}
function getDegreeInC(fahrenheit){
    var converter= new Converter();
    alert(converter.getCelsius(fahrenheit));
}

function getDegreeInF(celsius){
    var converter= new Converter();
    alert(converter.getFahrenheit(celsius));
}

function fillCharacterArray(){
    var fName=["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lName = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var age = [36, 34, 7, 34, 32, 8];
    characters = [];
    for (var i = 0; i < fName.length; i++) {
        var person = new Person(fName[i], lName[i]);
        var charObject = new Object(person);
        charObject.age = age[i];
        characters.push(charObject);
    }
}
function getCharacterAt(ndx) {
    if (typeof characters === "undefined") {
        alert("please click the 'Fill Array' button.");
    }
    else {
        var charObject = characters[ndx];
        alert(charObject.firstName + " your odd age sum is " + charObject.sumOfAge());
    }
}
