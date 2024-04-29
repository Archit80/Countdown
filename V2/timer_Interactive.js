

function clock(){

    const Button = document.querySelector("#submit");
const baapFrame = document.querySelector(".baapFrame");

Button.addEventListener("click", () => {
    baapFrame.classList.remove("hide");
    Button.classList.add("remove");
  });
  
 

    const currentDate = new Date();
    console.log(currentDate.toLocaleString());
    
    function pickDate(){
        const input = document.getElementById("dateselect").value;
        const targetDate = new Date(input);

        return targetDate;  
        }  
        
        pickDate();
        

    
    // const dateControl = document.querySelector('input[type="date"]').value;
    // console.log(dateControl);
    const difference = pickDate() - currentDate;
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


setInterval(clock,1000);


