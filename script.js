var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
  const kepek = ["./backg/1.jpg","./backg/2.png","./backg/3.jpg","./backg/4.jpg","./backg/5.jpg","./backg/6.jpg",
"./backg/7.jpg","./backg/8.jpg","./backg/9.png","./backg/10.jpg","./backg/11.jpg","./backg/12.jpg","./backg/13.jpg","./backg/14.jpg","./backg/15.png","./backg/16.jpg",
"./backg/17.jpg","./backg/18.jpg","./backg/19.jpg","./backg/20.png","./backg/21.jpg","./backg/22.jpg","./backg/23.jpg","./backg/24.jpg","./backg/25.png","./backg/26.jpg","./backg/27.png",];

// Véletlenszerűen válasszuk ki egy képet
const kepIndex = Math.floor(Math.random() * kepek.length);
const kep = kepek[kepIndex];

// Állítsuk be a header háttereként a kiválasztott képet
const header = document.querySelector("header");
header.style.backgroundImage = `url(${kep})`;
}

function showPage() {
  var loader = document.getElementById("loader");
  var egesz =   document.getElementById("egesz");
  loader.classList.add("hide");
  egesz.classList.add("aktiv");
document.body.style.overflow = "visible";
}

history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function belepes(){

      var cuccok = 0;
    if (document.getElementById("felhasznalob").value != ""){
        cuccok++;
    }
    if (document.getElementById("jelszob").value != ""){
        cuccok++;
    }

    if (cuccok < 2){
        document.getElementById("felhasznalob").placeholder = "Nincs felhasználónév";
        document.getElementById("felhasznalob").setAttribute("class","placeholder");
        document.getElementById("jelszob").placeholder = "Nincs jelszó";
        document.getElementById("jelszob").setAttribute("class","placeholder");
    }
    if (cuccok == 2){
        document.getElementById("hibauzi").innerHTML = "Érvénytelen jelszó vagy felhasználó";
     
    }
}
function regisztracio(){
    var cuccok = 0;
    if (document.getElementById("felhasznalo").value != ""){
        cuccok++;
    }
    if (document.getElementById("email").value != ""){
        cuccok++;
    }
    var jelszo = document.getElementById("jelszo").value;
    var jelszomeg = document.getElementById("jelszoujra").value;
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value != "" & !filter.test(email.value))  {
        document.getElementById("hibauzi").innerHTML = "Az E-mail nem helyes!<br>";;
    }
    if (email.value == ""){
        document.getElementById("email").placeholder = "Nincs megadva E-mail!";
        document.getElementById("email").setAttribute("class","placeholder");
    }

    if (cuccok < 4){
        
        document.getElementById("felhasznalo").placeholder = "Nincs felhasználó!";
        document.getElementById("felhasznalo").setAttribute("class","placeholder");
        document.getElementById("jelszo").placeholder = "Hibás jelszó!";
        document.getElementById("jelszo").setAttribute("class","placeholder");
        document.getElementById("jelszoujra").placeholder = "Nincs megadva jelszó!";
        document.getElementById("jelszoujra").setAttribute("class","placeholder");
  
    }
    if (jelszomeg != jelszo){
        document.getElementById("hibauzi").innerHTML = "A jelszavak nem egyeznek!<br>";;
    } else{
        cuccok = cuccok + 2;
    }
    
    if (cuccok == 4){
        alert("Még nincs kész mivel csak 1 hetet dolgoztam az odlalon, 2 hét is kevés lenne erre sztemxdd")
    }
    
}

