const targetDate = new Date("2024-06-01 00:00:00")
    console.log(targetDate.toLocaleString());

function clock(){
    const currentDate = new Date();
    console.log(currentDate.toLocaleString());
    
    
    
    // const dateControl = document.querySelector('input[type="date"]').value;
    // console.log(dateControl);
    const difference = targetDate - currentDate;
    console.log(difference);
    
    var daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
   
   
    Days.innerText = daysLeft;
    Hours.innerText = hoursLeft;
    Minutes.innerText = minutesLeft;
    Seconds.innerText = secondsLeft;


    Days = document.querySelector("#Days");
    Hours = document.querySelector("#Hours");
    Minutes = document.querySelector("#Minutes");
    Seconds = document.querySelector("#Seconds");

    if (difference <= 0) {
        console.log("Countdown complete!");
    }
    
}
clock();

setInterval(clock, 1000);


