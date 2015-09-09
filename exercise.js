  "use strict";
  var clockTimerId;

  Number.prototype.pad = function(size) {
      var s = String(this);
      while (s.length < (size || 2)) {
      	s = "0" + s;
      }
      return s;
    }

  function update() {
  	var date = new Date();
  	// var hr 
  	var hours = date.getHours();
  	var minutes = date.getMinutes();
  	var seconds = date.getSeconds();
  	//var time = hours + ":" + minutes + ":" + seconds;
  	// console.log(time);
  	document.getElementById("hours").textContent = hours.pad();
  	document.getElementById("minutes").textContent = minutes.pad();
  	document.getElementById("seconds").textContent = seconds.pad();
  	// var clock = document.getElementById("hours");
  	// clock.textContent = "";
  	// clock.textContent = time;x
  }


function clockStart() { // запустить часы
  clockTimerId = setInterval(update, 1000);
  update(); // (*)
}

function clockStop() {
  clearInterval(clockTimerId);
  clockTimerId = null;
}
