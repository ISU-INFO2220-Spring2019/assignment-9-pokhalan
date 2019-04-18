var People = [];
$(document).ready(function () {

    var profile = [{
        username: "weaver",
        password: "tester"
    }];
    $("#btnLogin").click(function () {
        var username = document.getElementById("username").value;
        var passcode = document.getElementById("password").value;
        var save = document.getElementById("remember").checked;
        if (username == profile[0].username && passcode == profile[0].password) {
            alert("You are logged in");
            if (save) {
                localStorage.setItem('username', username);
            }
        } else {
            alert("Your login failed");
        }
        location.reload();
    });
    $("#btnForget").click(function () {
        localStorage.removeItem("username");
    });
    if (localStorage.username != null) {
        $("#usename").text(localStorage.username);
    }
    $("#btnSub").click(function () {
        var people = {};
        people.name = document.getElementById("Name").value;
        people.phone = document.getElementById("Phone").value;
        people.age = document.getElementById("Age").value;
        people.grp = $("input:radio[name=group]:checked").val()
        People.push(people);
        localStorage.People = JSON.stringify(People);
        display();
    });
    $("form").submit(function (e) {
        e.preventDefault();
    }); 
    if (localStorage.getItem("People") != null) {
        display();
    }
    $("#btnClear").click(function () {
        localStorage.removeItem("People");
        location.reload();
    });

});
function display() {
    var show = $("#unorder")
    show.empty();
    var JSONdata = localStorage.People ;
    var peopleData = JSON.parse(JSONdata);
    for (var i = 0; i < peopleData.length; i++) {
        var li = $("<li></li>").addClass('best')
            .text((peopleData[i].name) + " " + (peopleData[i].phone) + " " + (peopleData[i].age) + " " + (peopleData[i].grp));
        var btnedit = $("<button> Edit</button>");
        li.append(btnedit);
        show.append(li);
    }

}
