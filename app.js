window.onload = function () {
    const rootTime = document.querySelector("time");
    const anniElement = document.querySelector("anni");
    const dateElement = document.querySelector("date");
    const yearElement = document.querySelector("year");
    const monthElement = document.querySelector("month");

    function updateCountdown() {
        // Lấy thời gian hiện tại và cộng thêm 7 tiếng để chuyển về múi giờ GMT+7 của Việt Nam
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 7);

        // Thiết lập ngày của bạn
        const yourDate = new Date("2022-06-17T00:00:00");

        // Tính khoảng thời gian giữa hai ngày
        let daysDiff = Math.floor((currentDate - yourDate) / (1000 * 60 * 60 * 24)); // Trừ đi 6 ngày
        let yearsDiff = Math.floor(daysDiff / 365);
        let monthsDiff = Math.floor((daysDiff % 365) / 30);
        let remainingDays = daysDiff - (yearsDiff * 365 + monthsDiff * 30);

        // Trừ đi 6 ngày
        daysDiff += 25;

        // Kiểm tra nếu số ngày vượt quá 30, tăng tháng lên 1 và cập nhật lại số ngày
        if (remainingDays > 30) {
            monthsDiff++;
            remainingDays -= 30;
        }

        // Kiểm tra nếu số tháng vượt quá 12, tăng năm lên 1 và cập nhật lại số tháng
        if (monthsDiff >= 12) {
            yearsDiff++;
            monthsDiff -= 12;
        }

        // Trừ đi 1 tháng
        monthsDiff--;

        // Kiểm tra xem tháng có là âm không, nếu có, giảm năm đi 1 và cập nhật lại tháng
        if (monthsDiff < 0) {
            yearsDiff--;
            monthsDiff += 12;
        }

        // Cập nhật các phần tử
        anniElement.textContent = formatDate(yourDate);
        dateElement.textContent = remainingDays + " NGÀY";
        yearElement.textContent = yearsDiff + " NĂM";
        monthElement.textContent = monthsDiff + " THÁNG";
    }

    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are 0-based
        const year = date.getFullYear();

        // Định dạng lại ngày tháng năm theo định dạng của Việt Nam (ngày/tháng/năm)
        return `${(day > 9 ? day : "0" + day)}/${(month > 9 ? month : "0" + month)}/${year}`;
    }

    function updateClock() {
        const today = new Date();
        const hrs = today.getHours();
        const mins = today.getMinutes();
        const secs = today.getSeconds();

        rootTime.textContent = `${(hrs > 9 ? hrs : "0" + hrs)}:${(mins > 9 ? mins : "0" + mins)}:${(secs > 9 ? secs : "0" + secs)}`;
    }

    // Initial updates
    updateCountdown();
    updateClock();

    // Set up timer
    setInterval(updateClock, 1000);

    // Insert mask
    document.body.insertAdjacentHTML("beforeend", "<div id='mask'></div>");
};
