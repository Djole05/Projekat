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

  if(!proveraPodataka(posiljalac, primalac, poruka)) {
    document.querySelector("#upozorenje").innerHTML="pogresni podaci";
    return;
  }

  var options = {}
  options.metod = "post";
  options.putanja  = "noviBlog";
  var poruka = {"autor":bloger, "email":email, "naslov":naslov, "blog":blog}
  options.sadrzaj = JSON.stringify(poruka); 
  AjaxZahtev(options, PrikaziOdgovorNaPoruku)
}

  function PrikaziOdgovorNaPoruku(odgovor){
  //alert("Odgovor servera:" + odgovor)
  //alert("OK")
  document.getElementById("blogovi").innerHTML = "noviBlog"
 /* alert(document.querySelector("#blogovi").innerHTML)
  var prikazi = document.querySelector("#blogovi");
  prikazi.innerHTML = odgovor;*/
}