function time() {
    if (window.matchMedia("(max-width: 500px)").matches) {
      const button = document.querySelector("#myButton");
      button.addEventListener("click", calculateTime);
  
      function calculateTime() {
        const countdown = document.querySelector("#countdown");
        const timer = 5;
        let amountTime = timer * 60;
        let timerId = setInterval(function() {
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
  
        if(seconds < 10) {
          seconds = "0" + seconds;
      }
  
        countdown.textContent = `${minutes} : ${seconds}`;
        amountTime--;
  
        if(amountTime < 0) {
          stopTimer();
          amountTime = 0;
      }
  
      function stopTimer() {
          clearInterval(timerId);
          countdown.textContent = "Time is up!";
      }
  
      }, 1000);
  }
  } 
  
    else {
      const timer = 5;
      let amountTime = timer * 60;
  
      function calculateTime() {
        const countdown = document.querySelector("#countdown"); 
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
      
        if(seconds < 10) {
          seconds = "0" + seconds;
      }
      
      countdown.textContent = `${minutes} : ${seconds}`;
      amountTime--;
      
        if(amountTime < 0) {
          stopTimer();
          amountTime = 0;
      }
      
        function stopTimer() {
          clearInterval(timerId);
          countdown.textContent = "Time is up!";
      }
      }
  
        let timerId = setInterval(calculateTime, 1000);
  }
  }
  
  time();
  
  