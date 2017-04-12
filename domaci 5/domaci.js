function max(a,b){
	if(a>b){
		return a;
		}
		else {
			return b;
		}
	}
	
var three = max (97,85)
console.log(three)


function maxofThree(a,b,c){
	return max(max(a,b),c)
	}

var three = maxofThree(73,444,252)
console.log(three);


function samoglasnik(slovo) {
	var samoglasnici = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
	var r = samoglasnici.some(function(s) {
		return s == slovo;
	})
		return r
}
console.log(samoglasnik("a"));
console.log(samoglasnik("b"));

 
function suglasnik(s) {
	var razlika = s.charCodeAt(0) - "a".charCodeAt();
	if((razlika < 26 && razlika >= 0) && !samoglasnik(s))
		return true;
		return false;
}
function translate(t) {
	var tekst = "";
	for(var i=0; i<t.length; i++) {
		tekst += t.charAt(i);
		if( suglasnik(t.charAt(i)) ) {
			tekst += "o" + t.charAt(i);
		}
	}
	return tekst;
}
console.log(translate("ovo je tesko"));

 
function suma(s) {
	var suma = 0;
	for(var i = 0; i<s.length; i++) {
		suma += s[i];
	}
	return suma;
}
function proizvod(p) {
	var proizvod = 1;
	for(var i = 0; i<p.length; i++) {
		proizvod *= p[i];
	}
	return proizvod;
}
console.log(suma([1,2,3,4]));   
console.log(proizvod([1,2,3,4]));
   

function reverse(t) {
	var obrnutiTekst = "";
	for(var i = t.length - 1; i >= 0; i--)
		obrnutiTekst += t.charAt(i);
		return obrnutiTekst;
}
console.log(reverse("moj primer"));
   
 
function recnik(r) {
	var obj = {"happy":"srecna", "new":"nova", "year":"godina"};
	var prevod = "";
	var reci = r.split(" ");
	for(var i = 0; i < reci.length; i++) {
		prevod += obj[reci[i]] + " ";
	}
	return prevod;
}
console.log(recnik("happy new year"));
   

function najduzaRec(ndr) {
	var najduza = 0;
	for(var i = 0; i<ndr.length; i++) {
		if(ndr[i].length > ndr[najduza].length)
			najduza = i;
	}
	return ndr[najduza];
}
console.log(najduzaRec(["Ferrari", "Mercedes", "RedBull", "McLaren", "Williams", "Renault", "Sauber", "ToroRosso", "ForceIndia", "Haas"]));


function filtrirajReci(niz, i) {
	var duze = [];
	for(var j = 0; j<niz.length; j++) {
		if(niz[j].length > i)
			duze.push(niz[j]);
	}
	return duze;
}
console.log(filtrirajReci(["Formula1", "nova", "sezona", "2017"], 3))

  
function frekSlova(string) {
	var lista = {};
	for(var i = 0; i < string.length; i++) {
		if(typeof lista[string.charAt(i)] != 'undefined')
			lista[string.charAt(i)]++;
		else
			lista[string.charAt(i)] = 1;
	}
	return lista;
}
console.log(frekSlova("abbabcbdbabdbdbabababcbcbab"));