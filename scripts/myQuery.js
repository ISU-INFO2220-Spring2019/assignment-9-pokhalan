// Alankar Pokhrel
// 3/21/2019
// Info2220
// Jon Holmes
// Assignment 7
// Purpose:Getting started with the jQuery Framework.
$(document).ready(function () {
    $('#btnChangeSpan').click(function () {
        $('#spnOne').text("New Text for the Span");
    });
    $("#btnAppendToSpan").click(function () {
        $('#spnOne').append(" == Text at the back");
    });
    $("#btnPrependToSpan").click(function () {
        $('#spnOne').prepend(" Text at the front --");
    });
    $("#btnBeforeSpan").click(function () {
        $('#spnOne').before("Text Before ++");
    });
    $("#btnAfterSpan").click(function () {
        $('#spnOne').after("@@ Text After");
    });
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    $("#btnNumberPs").click(function () {
        for (i = 0; i < 5; i++) {
            $("#divNumbers p").eq(i).prepend((i + 1) + ". ");
        }
    });
    $("#btnClassPSuccess").click(function () {
        $('#divClass p').addClass("sucess");
    });
    $("#btnClassPError").click(function () {
        $('#divClass p:even').removeClass("sucess");
        $('#divClass p:even').addClass("error");
    });
    $("#btnClassPWarning").click(function () {
        $('#divClass p').removeClass("sucess error");
        $('#divClass p').addClass("warning");
    });
    $("#btnAddLastNames").click(function () {
        $('.bff').prepend('<span><strong> FlintStone </strong> </span>');
        $('.bff').append('<span><em> Rubble </em><span>');
        $('.bff').next().append('<span><del> The Dinosaur </del><span>');
    });
    $("#btnRemoveLarry").click(function () {
        $('ul .first').remove();
    });
    $("#btnClearCurly").click(function () {
        $('ul .second').empty();
    });
    $("#btnRemoveMoeLastName").click(function () {
        $('ul .third span').remove();
    });
    $("#btnRemoveShempLastName").click(function () {
        $('ul .third +li span').remove();
    });
    $("#btnChangeText").click(function () {
        $('#spnTwo').parent().siblings().children().next().eq(0).text("I was Changed");
    });
    $("#btnTooglePs").click(function () {
        $('p').toggle();
        if ($("#btnTooglePs").text() === "Hide All Ps")
            $("#btnTooglePs").text("Show All Ps");
        else
            $("#btnTooglePs").text("Hide All Ps");
    });
});