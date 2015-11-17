/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  Variables globales
var elem = null;

// variables pour déplacement
var min = 0;
var max = 0;
var duree = 5;
var pas = 0;
var pos = 0;
var timer1 = null;

// variables pour rotation
var init_larg = 0;
var init_height = 0;
var rot = 0;
var sens = 0;
var timer2 = null;

function balle_droite() {
    if (timer1 != null) return;
    elem = document.getElementById("img1");
    pos = min = elem.offsetLeft;
    max = document.body.clientWidth - elem.width;
    pas = Math.round((max - min) / 500);
    if (pas < 1) pas = 1;
    timer1 = setInterval(balle_deplace, 10);
}

function balle_gauche() {
    if (timer1) return;
    elem = document.getElementById("img1");
    pos = max = elem.offsetLeft;
    min = 10;
    pas = Math.round((min - max) / 500);
    if (pas > -1) pas = -1;
    timer1 = setInterval(balle_deplace, 10);
}

function balle_deplace() {
    pos += pas;
    elem.style.left = pos + "px";
    if ((pos >= max) || (pos <= min)){
        pas = 0;
        clearInterval(timer1);
        timer1 = null;
    }
}

function balle_stop() {
    if (timer1) {
        clearInterval(timer1);
        timer1 = null;
    }
    if (timer2) {
        clearInterval(timer2);
        timer2 = null;
        elem.style.width = init_larg+"px";
        elem.style.left = (elem.offsetLeft - ((init_larg - rot) /2)) + "px";
    }
}

function balle_rotation() {
    if (timer2 != null) return;
    if (elem==null) elem = document.getElementById("img1");
    rot = init_larg = elem.width;
    //init_height = elem.height;
    elem.style.height = elem.height + "px";
    sens = -1;
    timer2 = setInterval(balle_tourne, 20);
}

function balle_tourne() {
    rot_pos = elem.offsetLeft - sens;
    if (sens == 1) {
        if((rot+=2) >= init_larg) sens = -1;
    } else {
        if((rot-=2) <= 0) sens = +1;
    }
    elem.style.width = rot + "px";
    elem.style.left = rot_pos + "px";
}

