// Alankar Pokhrel
// 1/31/2019
// Info2220
// Jon Holmes
// Assignment 3- Part III
// Purpose:This is an intro-end script for JavaScript Introduction page. This will be downloaded and executed as soon as intro script is executed.
var greetingResponse=prompt("Enter a greeting");
if(greetingResponse !== null){
    alert(greetingResponse+ ", "+myName());
}else{
    alert("I am sorry "+myName()+"; I do not know what to do.");
}
loadLast="I really am last.";