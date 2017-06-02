window.onload = function() {
  
  var dugmePosalji = document.querySelector("#forma");
  dugmePosalji.addEventListener("submit", PosaljiBlog);

}

function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
      console.log(req);
 		  callback(req.responseText);
    }
    else {
 		  callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.sadrzaj);

}

function PosaljiBlog(e){
  e.preventDefault();

	/*alert("Blog se salje.")*/
  var bloger = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var naslov = document.querySelector("#title").value;
  var blog = document.querySelector("#message").value;
 
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
  //document.getElementById("blogovi").innerHTML = "noviBlog"
  var odgovor2 = JSON.parse(odgovor);

  document.getElementById("blogovi").innerHTML = "<section> <h1>" + odgovor2.naslov + "</h1>";
  document.getElementById("blogovi").innerHTML += "<h2>" + odgovor2.autor + "</h2>";
  document.getElementById("blogovi").innerHTML += "<h3>" + odgovor2.email + "</h3>";
  document.getElementById("blogovi").innerHTML += "<p>" + odgovor2.blog + "</p></section>";
 /* alert(document.querySelector("#blogovi").innerHTML)
  var prikazi = document.querySelector("#blogovi");
  prikazi.innerHTML = odgovor;*/
}