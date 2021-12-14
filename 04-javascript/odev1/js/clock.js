function askName() {
    let name = prompt("Adınız Nedir ? ");
    document.getElementById("name").innerText = name
}
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // 1.Yol link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    let options = { weekday : 'long' };
    let weekDay = new Intl.DateTimeFormat('tr-TR', options).format(time)

    hour = hour < 10 ? "0" + hour : hour
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec
    
    
    let currentTime = hour+":"+min+":"+sec+" "+weekDay;

    document.getElementById('clock').innerText = currentTime
    setInterval(showTime, 500);
}

askName()
showTime()

