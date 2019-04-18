$(document).ready(function () {
    $("#btnSearch").click(function (e) {
        $.ajax({
            url: "data/books.json"
            , success: function (jsonStuff) {
                var txt = $("#txtsearch").val().toLowerCase();
                if (jsonStuff.ok === "true") {
                    var detail = jsonStuff.data;
                    var tblBody = $('#showDetail');
                    tblBody.empty();
                    for (var i = 0; i < detail.length; i++) {
                        if (JSON.stringify(detail[i]).toLowerCase().indexOf(txt) > -1) {
                            var row = $("<tr></tr>");
                            var title = $("<td></td>").text(detail[i]['Title']);
                            var isbn = $("<td></td>").text(detail[i]['ISBN']);
                            var author = $("<td></td>").text(detail[i].Author.LastName + "," + detail[i].Author.FirstName + detail[i].Author.MiddleName);
                            var tag = $("<td><</td>");
                            var list = $("<ul></ul>");
                            for (var j = 0; j < detail[i].Tags.length; j++) {
                                list.append($("<li></li>").text(detail[i].Tags[j]));
                            }
                            tag.append(list);
                            row.append(title);
                            row.append(isbn);
                            row.append(author);
                            row.append(tag);
                            tblBody.append(row);
                        }
                    }
                }
            }

        });
        return false;
    });
    $("#txtKey").keyup(function (e) {
        $.ajax({
            url: "data/people.json",
            success: function (people) {
                var ul = $("#display");
                ul.empty();
                var txtPeople = $("#txtKey").val();
                for (var i = 0; i < people.length; i++) {
                    if ((people[i].name.toLowerCase().indexOf(txtPeople.toLowerCase()) > -1) || (people[i].phone.toLowerCase().indexOf(txtPeople.toLowerCase()) > -1)) {
                        var li = $("<li></li>").addClass('best')
                                                .text((people[i].name) + " " + (people[i].age) + " " + (people[i].phone) + " " + (people[i].group));
                        ul.append(li);
                    }
                }
            }
        });
    });
    return false;
});




