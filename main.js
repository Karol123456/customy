let datapis = document.getElementById('datapis');
let countDownDate = new Date("Dec 23, 2022 20:30:00").getTime();

let aha = setInterval(function() {


  let now = new Date().getTime();
    

  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
 
  document.getElementById("zegar").innerHTML = days + "d | " + hours + "h | "
  + minutes + "m | " + seconds + "s";
    

  if (distance < 0) {
    
    countDownDate = new Date("Dec 30, 2022 20:30:00").getTime();
    datapis.innerHTML= "piątek 30.12.2022";
    return
  }
}, 1000);


const audio = document.getElementById("audio");



let obraz2 = document.getAnimations('mocieek');

$(document).ready(function () {
  setTimeout(function(){
      $('#czwartyjasper').fadeIn(500);
  }, 3000);
});

$(document).ready(function () {
  setTimeout(function(){
      $('#mocieek').fadeIn(500);
  }, 3000);
});

$(document).ready(function () {
  setTimeout(function(){
      $('#jaspertaniec').fadeIn(500);
  }, 3000);
});


$(document).ready(function () {
  setTimeout(function(){
      $('#gagri').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#troll').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#witam').hide(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#xdding').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#jasperDwa').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#jasperjeden').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#szef').fadeIn(500);
  }, 3000);
});
$(document).ready(function () {
  setTimeout(function(){
      $('#aaaa').fadeIn(500);
  }, 3000);
});
function playaudio() {
   audio.play();
    
  }
  function pauseaudio(){
    audio.pause();
  }