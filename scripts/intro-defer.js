// Alankar Pokhrel
// 1/31/2019
// Info2220
// Jon Holmes
// Assignment 3- Part III
// Purpose:This is an defer script for JavaScript Introduction page. This will be downloaded while the rest of the page is being downloaded but will not be executed until the end.

if(typeof(loadLast) !== 'undefined'){
    alert("This deferred script has run.");
    alert((loadLast));
}
