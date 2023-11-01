var yourDate = new Date("2022-07-12 00:00:00");
var music = ['Nothin', 'Tinhyeunguquen', 'thichemhoinhiu', 'motngaychangnang'];
// const Nothin = "Nothin On Me",
//     Tinhyeunguquen ="Tình Yêu Ngủ Quên",
//     thichemhoinhiu="Thích Em Hơi Nhìu",
//     motngaychangnang="Một Ngày Chẳng Nắng";

document.addEventListener('DOMContentLoaded', function () {
    var rootTime = document.querySelector("time");
    var month1 = 0, year1 = 0;
    var currentDate = new Date();
    var yearDiff = currentDate.getFullYear() - yourDate.getFullYear();
    var timeDiff = currentDate - yourDate;
    var dayDiff = currentDate.getDate() - yourDate.getDate();
    var monthDiff = currentDate.getMonth() - yourDate.getMonth();
    dayDiff = dayDiff % 30;
    document.querySelector("anni").textContent = formatDate(yourDate);;
    if (dayDiff < 0) {
        monthDiff--;
        var lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        dayDiff += lastDayOfLastMonth.getDate();
    }
    document.querySelector("date").textContent = Math.abs(dayDiff) + " DAYS";
    document.querySelector("year").textContent = yearDiff + " YEAR";
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    document.querySelector("month").textContent = monthDiff + " MONTH";

    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1; // Tháng tính từ 0
        var year = date.getFullYear();

        return `${(day > 9 ? day : "0" + day)}-${(month > 9 ? month : "0" + month)}-${year}`;
    }
    function olock() {
        var today = new Date();
        var timeDiff = today - yourDate;
        var hrs = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
        var min = Math.floor(timeDiff / (1000 * 60)) % 60;
        var sec = Math.floor(timeDiff / 1000) % 60;
        rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
    }
    olock();
    var timer = setInterval(function () { olock() }, 1000);
    document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random() * music.length)]}.mp3`);

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );

}, false);
