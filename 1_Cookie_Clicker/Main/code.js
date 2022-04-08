"use strict";
// var moin = document.addEventListener("load", alert("Made By Losteralsdu"));
function öffnen() {
  var fenster = document.getElementById("content");
  var con = document.getElementById("inhalt");
  var audio = new Audio("../Bilder/shop1.mp3");
  if (fenster.style.display == "none") {
    fenster.style.display = "block";
    con.style.display = "block";
    audio.volume = 0.23;
    audio.play();
  }
}
function schließen() {
  var fenster = document.getElementById("content");
  var con = document.getElementById("inhalt");
  if (fenster.style.display == "block") {
    fenster.style.display = "none";
    con.style.display = "none";
  }
}
function cookieclick() {
  var cookiebtn = document.getElementById("cookieclick");
  var score = document.getElementById("Scorez");
  var Scorez = parseFloat(document.getElementById("Scorez").textContent);
  var Multipl = parseFloat(document.getElementById("clickm").textContent);
  var bisher = parseFloat(document.getElementById("bisher").textContent);
  var bishera = document.getElementById("bisher");
  var sound = new Audio("../Bilder/click1.mp3");
  if (cookiebtn.onclick) {
    Scorez = Scorez + Multipl;
    score.innerHTML = Scorez.toFixed(2);
    bishera.innerHTML = bisher + 1;
    sound.volume = 0.25;
    sound.play();
  }
}
function Multi() {
  var Scorez = parseFloat(document.getElementById("Scorez").textContent);
  var Multipl = parseFloat(document.getElementById("clickm").textContent);
  var mutlipp = document.getElementById("clickm");
  var preis = parseFloat(document.getElementById("preism").textContent);
  var preiss = document.getElementById("preism");
  var score = document.getElementById("Scorez");
  var lvla = document.getElementById("levelk");
  var lvl = parseFloat(document.getElementById("levelk").textContent);
  if (Scorez >= preis) {
    //score
    Scorez = Scorez - preis;
    score.innerHTML = Scorez.toFixed(2);
    //preis
    preis = preis;
    preiss.innerHTML = preis.toFixed(1);
    //Mutli
    Multipl = Multipl + 0.1;
    mutlipp.innerHTML = Multipl.toFixed(2);
    //level
    lvl = lvl + 1;
    lvla.innerHTML = lvl;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast nicht Genug Geld!");
  }
}
function weitere() {
  var fenster = document.getElementById("weitere");
  if (fenster.style.display == "none") {
    fenster.style.display = "block";
    document.getElementById("inhalt").style.display = "none";
    document.getElementById("meilens").style.display = "none";
  }
}
function schw() {
  var fenster = document.getElementById("weitere");
  if (fenster.style.display == "block") {
    fenster.style.display = "none";
    document.getElementById("inhalt").style.display = "block";
    document.getElementById("meilens").style.display = "block";
  }
}
//Lootbox
//L1
function lucky1() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preis1").textContent);
  var min = 50;
  var max = 950;
  if (sc >= preis) {
    var rndm = Math.floor(Math.random() * (max - min)) + min;
    sc = sc - preis + rndm;
    sca.innerHTML = sc;
    alert("Du hast " + rndm + " gewonnen!");
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
//Geld Cheat
function money() {
  var pas = "Lostiboy";
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var ein = prompt("Gib hier das Passwort ein!");
  if (ein == pas) {
    sc = sc + 150000;
    sca.innerHTML = sc;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast keine Rechte");
  }
}
//l2
function lucky2() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preis2").textContent);
  var min = 500;
  var max = 4500;
  if (sc >= preis) {
    var rndm = Math.floor(Math.random() * (max - min)) + min;
    sc = sc - preis + rndm;
    sca.innerHTML = sc;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
    alert("Du hast " + rndm + " gewonnen!");
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
//l3
function lucky3() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preis3").textContent);
  var rest = parseFloat(document.getElementById("restg").textContent);
  var resta = document.getElementById("restg");
  var min = 3500;
  var max = 20000;
  if (sc >= preis) {
    if (rest > 0) {
      var rndm = Math.floor(Math.random() * (max - min)) + min;
      sc = sc - preis + rndm;
      sca.innerHTML = sc;
      alert("Du hast " + rndm + " gewonnen!");
      rest = rest - 1;
      resta.innerHTML = rest;
      //Sound
      var soun = new Audio("../Bilder/buy1.mp3");
      soun.volume = 0.25;
      soun.play();
    } else {
      alert("Du hast das Maximum erreicht!");
    }
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
function lucky4() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preis4").textContent);
  var rest = parseFloat(document.getElementById("restd").textContent);
  var resta = document.getElementById("restd");
  var min = 75000;
  var max = 250000;
  if (sc >= preis) {
    if (rest > 0) {
      var rndm = Math.floor(Math.random() * (max - min)) + min;
      sc = sc - preis + rndm;
      sca.innerHTML = sc;
      //Sound
      var soun = new Audio("../Bilder/buy1.mp3");
      soun.volume = 0.25;
      soun.play();
      alert("Du hast " + rndm + " gewonnen!");
      rest = rest - 1;
      resta.innerHTML = rest;
    } else {
      alert("Du hast das Maximum erreicht!");
    }
  } else {
    alert("Du hast zu wenig Geld");
  }
}
function meilen() {
  var con = document.getElementById("inhaltm");
  if (con.style.display == "none") {
    con.style.display = "block";
    document.getElementById("meilens").style.display = "none";
    document.getElementById("inhalt").style.display = "none";
  }
}
function schließenm() {
  var con = document.getElementById("inhaltm");
  if (con.style.display == "block") {
    con.style.display = "none";
    document.getElementById("meilens").style.display = "block";
    document.getElementById("inhalt").style.display = "block";
  }
}
function mittel() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preism").textContent);
  var lvl = parseFloat(document.getElementById("levelm").textContent);
  var lvla = document.getElementById("levelm");
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  if (sc >= preis) {
    //Score Abzug
    sc = sc - preis;
    sca.innerHTML = sc;
    //lvl
    lvl = lvl + 1;
    lvla.innerHTML = lvl;
    multi = multi + 0.5;
    multia.innerHTML = multi;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
function groß() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preisg").textContent);
  var lvl = parseFloat(document.getElementById("levelg").textContent);
  var lvla = document.getElementById("levelg");
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  if (sc >= preis) {
    //Score Abzug
    sc = sc - preis;
    sca.innerHTML = sc;
    //lvl
    lvl = lvl + 1;
    lvla.innerHTML = lvl;
    multi = multi + 2;
    multia.innerHTML = multi;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
function fett() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var preis = parseFloat(document.getElementById("preisf").textContent);
  var lvl = parseFloat(document.getElementById("levelf").textContent);
  var lvla = document.getElementById("levelf");
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  if (sc >= preis) {
    //Score Abzug
    sc = sc - preis;
    sca.innerHTML = sc;
    //lvl
    lvl = lvl + 1;
    lvla.innerHTML = lvl;
    multi = multi + 4.5;
    multia.innerHTML = multi;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
function meilenstein() {
  var bisher = parseFloat(document.getElementById("bisher").textContent);
  var biszu = parseFloat(document.getElementById("biszu").textContent);
  var biszua = document.getElementById("biszu");
  if (bisher > biszu) {
    alert("Eingelöst");
    //Loot
    looot();
    //Erhöhen
    biszua.innerHTML = biszu * 2;
  } else {
    alert("Du hast den Meilenstein noch nicht erreicht!");
  }
}
function looot() {
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  var gewinnee = new Array();
  var gewinnea = document.getElementById("gewinne");
  var max = 1500;
  var min = 250;
  var rndm = Math.floor(Math.random() * (max - min)) + min;
  sc = sc + rndm;
  gewinnee.push(rndm);
  gewinnea.innerHTML = gewinnee;
  sca.innerHTML = sc;
  alert("Du hast " + rndm + " gewonnen!");
}
function erw() {
  var er = document.getElementById("erweiterter");
  var inh = document.getElementById("inhalt");
  //Wenn Fetter Finger == 5 dann zugriff auf erweiterter Shop
  var fett = parseFloat(document.getElementById("levelf").textContent);
  if (fett >= 5) {
    if (er.style.display == "none") {
      er.style.display = "block";
      inh.style.display = "none";
    }
  } else {
    alert("Das Level vom Fetten Finger muss mindestens Level 5 sein!");
  }
}
function main() {
  var er = document.getElementById("erweiterter");
  var inh = document.getElementById("inhalt");
  if (er.style.display == "block") {
    er.style.display = "none";
    inh.style.display = "block";
  }
}
function geringv() {
  //score
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  //Preis
  var preis = parseFloat(document.getElementById("preisgering").textContent);
  //Level
  var level = parseFloat(document.getElementById("levelgeringv").textContent);
  var levela = document.getElementById("levelgeringv");
  //Mutli
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  //CPS
  var cps = 17.5;
  if (sc >= preis) {
    //Geld abziehen
    sc = sc - preis;
    sca.innerHTML = sc;
    //level
    level = level + 1;
    levela.innerHTML = level;
    //Multi
    multi = multi + cps;
    multia.innerHTML = multi;
    //Sound
    var soun = new Audio("../Bilder/buy1.mp3");
    soun.volume = 0.25;
    soun.play();
  } else {
    alert("Du hast zu wenig Geld!");
  }
}
function vfinger() {
  //score
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  //Preis
  var preis = parseFloat(document.getElementById("preisv").textContent);
  //level
  var level = parseFloat(document.getElementById("levelv").textContent);
  var levela = document.getElementById("levelv");
  //Sound
  var sound = new Audio("../Bilder/buy1.mp3");
  //Mutli
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  //
  if (sc >= preis) {
    //Sound
    sound.volume = 0.25;
    sound.play();
    //score
    sc = sc - preis;
    sca.innerHTML = sc;
    //Multi
    multi = multi + 70.5;
    multia.innerHTML = multi;
    //level
    level = level + 1;
    levela.innerHTML = level;
  } else {
    alert("Du hast zu wenig Geld");
  }
}
function großv() {
  //score
  var sc = parseFloat(document.getElementById("Scorez").textContent);
  var sca = document.getElementById("Scorez");
  //Preis
  var preis = parseFloat(document.getElementById("preisgv").textContent);
  //level
  var level = parseFloat(document.getElementById("levelgv").textContent);
  var levela = document.getElementById("levelgv");
  //Sound
  var sound = new Audio("../Bilder/buy1.mp3");
  //Mutli
  var multi = parseFloat(document.getElementById("clickm").textContent);
  var multia = document.getElementById("clickm");
  //
  if (sc >= preis) {
    //Sound
    sound.volume = 0.25;
    sound.play();
    //score
    sc = sc - preis;
    sca.innerHTML = sc;
    //Multi
    multi = multi + 180;
    multia.innerHTML = multi;
    //level
    level = level + 1;
    levela.innerHTML = level;
  } else {
    alert("Du hast zu wenig Geld");
  }
}
