let datapis = document.getElementById('datapis');
let countDownDate = new Date("Nov 18, 2022 20:30:00").getTime();

let aha = setInterval(function() {


  let now = new Date().getTime();
    

  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
 
  document.getElementById("zegar").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    

  if (distance < 0) {
    
    countDownDate = new Date("Nov 25, 2022 20:30:00").getTime();
    datapis.innerHTML= "piątek 25.11.2022";
    return
  }
}, 1000);


const audio = document.getElementById("audio");




function playaudio() {
   audio.play();
    
  }
  function pauseaudio(){
    audio.pause();
  }