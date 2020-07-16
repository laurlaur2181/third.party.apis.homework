var currentTime = moment().format("TM");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

$("#9Row").attr("time", moment("9:00 am").format("TM"));
$("#10Row").attr("time", moment("10:00 am").format("TM"));
$("#11Row").attr("time", moment("11:00 am").format("TM"));
$("#12Row").attr("time", moment("12:00 pm").format("TM"));
$("#1Row").attr("time", moment("1:00 pm").format("TM"));
$("#2Row").attr("time", moment("2:00 pm").format("TM"));
$("#3Row").attr("time", moment("3:00 pm").format("TM"));
$("#4Row").attr("time", moment("4:00 pm").format("TM"));
$("#5Row").attr("time", moment("5:00 pm").format("TM"));

$(document).ready(function () {

renderPlans();

var currentDay = moment().format("TM");

$("#currentDay").text(currentDay);



for (var i = 1; i <= 12; j++) {
    var inputTime = $("#" + i + "Row").attr("time");
    var inputTimeInt = parseInt(inputTime);
  

        if (currentTimeInt === inputTimeInt){
            $("#" + i + "Row").addClass("present");
            
        }

        if (currentTimeInt === inputTimeInt){
            $("#" + i + "Row").addClass("past");
        }

        if (currentTimeInt === inputTimeInt){
            $("#" + i + "Row").addClass("future");
        }

    }
    saveBtn.on("click", function () {
        var hour = $(this).attr("data-hour");
        var plan = $("#" + hour + "Row").val();
        localStorage.setItem(hour, plan);
    });

    function renderPlans() {
        for (var i = 1; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


});