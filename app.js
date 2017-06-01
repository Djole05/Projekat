window.onload = function() {

  
  var dugmePosalji = document.querySelector("#Posalji");
  dugmePosalji.addEventListener("click", PosaljiBlog);

}

function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
 		  callback(req.responseText);
    }
    else {
 		  callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.sadrzaj || null);
}

function PosaljiBlog(){
	/*alert("Blog se salje.")*/
  var bloger = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var naslov = document.querySelector("#title").value;
  var blog = document.querySelector("#message").value;
/*
  if(!proveraPodataka(posiljalac, primalac, poruka)) {
    document.querySelector("#upozorenje").innerHTML="pogresni podaci";
    return;
  }
*/
  var options = {}
  options.metod = "post";
  options.putanja  = "novi-blog";
  var poruka = {"autor":bloger, "email":email, "naslov":naslov, "blog":blog}
  options.sadrzaj = JSON.stringify(poruka); 
  AjaxZahtev(options, PrikaziOdgovorNaPoruku)
}

function PrikaziOdgovorNaPoruku(odgovor){
  alert("Odgovor servera:" + odgovor)
  document.querySelector("#blogovi").innerHTML = odgovor
}



/*

function Logovanje(){
  var options = {}
  options.metod = "post"
  options.putanja = "login"
  var korsinik = {"ime":document.querySelector("#korisnik").value, "pin":document.querySelector("#pin").value}
  options.sadrzaj = JSON.stringify(korsinik)
  AjaxZahtev(options, PrikaziOdgovorNaLogovanje)
}

function Registracija(){
  if(!validacijaKorisnika()){
    document.querySelector("#upozorenje").innerHTML = "Neispravno ime ili pin"
    return
  }
  var options = {}
  options.metod = "post"
  options.putanja = "registracija"
  var korisnik = {"ime":document.querySelector("#korisnik").value, "pin":document.querySelector("#pin").value}
  options.sadrzaj = JSON.stringify(korisnik)
  AjaxZahtev(options, PrikaziOdgovorNaRegistraciju)
}

function validacijaKorisnika(){
  ime = document.querySelector("#korisnik").value
  pin = document.querySelector("#pin").value
  if (ime.length < 5 || pin.length < 4){
     return false
  }
  return true
}

function PrikaziOdgovorNaRegistraciju(odgovor){
  document.querySelector("#upozorenje").innerHTML = odgovor
}

function PrikaziOdgovorNaLogovanje(odgovor){
  if (odgovor == "Registrovan"){
      document.querySelector("#forma-login").style.visibility = "hidden"
      document.querySelector("#forma-operacije").style.visibility = "visible"
      document.querySelector("#upozorenje").innerHTML = ""
  }
  else{
      document.querySelector("#upozorenje").innerHTML="Niste registrovani korisnik"
  }
}


function prikaziInbox() {
  sakrijFormuPoruke()
  var options = {}
  options.metod = "post";
  options.putanja  = "inbox";
  options.sadrzaj = document.querySelector("#korisnik").value;
  AjaxZahtev(options, InboxPoruke)
}

function InboxPoruke(odgovor){
  document.querySelector("#poruke").innerHTML = odgovor
}

function prikaziOutbox() {
  sakrijFormuPoruke()
  var options = {}
  options.metod = "post";
  options.putanja  = "outbox";
  options.sadrzaj = document.querySelector("#korisnik").value;
  AjaxZahtev(options, OutboxPoruke)
}

function OutboxPoruke(odgovor){
  document.querySelector("#poruke").innerHTML = odgovor
}

function sakrijFormuPoruke() {
  document.querySelector("#forma-poruka").style.visibility="hidden";
  document.querySelector("#upozorenje").innerHTML="";
}

function prikaziFormuPoruke() {
  document.querySelector("#upozorenje").innerHTML="";
  document.querySelector("#poruke").innerHTML="";
  document.querySelector("#forma-poruka").style.visibility="visible";
}

function posaljiPoruku() {
  var posiljalac = document.querySelector("#korisnik").value;
  var primalac = document.querySelector("#primalac").value;
  var poruka = document.querySelector("#poruka").value;
  
  if(!proveraPodataka(posiljalac, primalac, poruka)) {
    document.querySelector("#upozorenje").innerHTML="pogresni podaci";
    return;
  }

  var options = {}
  options.metod = "post";
  options.putanja  = "nova-poruka";
  var poruka = {"od":posiljalac, "za":primalac, "poruka":poruka}
  options.sadrzaj = JSON.stringify(poruka); 
  AjaxZahtev(options, PrikaziOdgovorNaPoruku)
	//sakrijFormuPoruke();
}



function proveraPodataka(posiljalac, primalac, poruka) {
  if(posiljalac == "" || primalac == "" || poruka == "") {
    return false;
  }
  return true;
}*/