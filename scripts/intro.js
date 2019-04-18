// Alankar Pokhrel
// 1/31/2019
// Info2220
// Jon Holmes
// Assignment 3- Part III
// Purpose:This is an intro script for JavaScript Introduction page. This will be downloaded and executed as soon as possible.
alert("The script in the header has run.");
var loadLast="I loaded last";
var anArray=[];
for(var i=0; i<anArray.length; i++){
    if(anArray[i]===undefined){
        anArray[i]=[];
    }else{
        alert("The array was not undefined");
    }
}
anArray.push(34);
anArray.push(5.5);
anArray.push(33.5);
anArray.push(46.5);
anArray.push(59);
anArray.push(64);
anArray.push(43);
anArray.push(64);
anArray.push(48);
anArray.push(49);
anArray.push(40);
anArray.push(59);
anArray.push(44);
anArray.push(54);
anArray.push(19.5);
anArray.push(25);
anArray.push(69);
anArray.push(23);
var totalSum=0;
var index=0;

for(index=0; index<anArray.length; index++){
    totalSum+=anArray[index];
}
var average=totalSum/index;
alert(average);

function myName(){
    return "Alankar Pokhrel";
}




