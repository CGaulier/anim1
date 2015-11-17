/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timerId; 				// current timer if started

function clockStart() { 
  if (timerId) return; 
  timerId = setInterval(update, 1000);
  update();  				// Mise à jour de l'heure
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function update() {
  var date = new Date(); 
  var hours = date.getHours();
  if (hours < 10) hours = '0'+hours;
  document.getElementById('hour').innerHTML = hours;

  var minutes = date.getMinutes();
  if (minutes < 10) minutes = '0'+minutes;
  document.getElementById('min').innerHTML = minutes;

  var seconds = date.getSeconds();
  if (seconds < 10) seconds = '0'+seconds;
  document.getElementById('sec').innerHTML = seconds;
}

