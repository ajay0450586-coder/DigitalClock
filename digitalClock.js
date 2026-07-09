const realTime = () => {
    const nowDate = new Date();

    //time logic
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    // adding AM/PM
    const amPm = hours >= 12 ? "PM" : "AM";

    // convert 12hr clock
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = amPm;

    //adding date
    const dateData = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        nowDate.toLocaleDateString("en-US", dateData);
    
}

realTime();
setInterval(realTime, 1000);