var http = require("http");
var fs = require("fs");

// Kesiranje statickih fajlova
var index = fs.readFileSync("index.html","utf8");
var appcss = fs.readFileSync("app.css","utf8");
var appjs = fs.readFileSync("app.js","utf8");
var ikona = fs.readFileSync("favicon.ico");
var pozadina = fs.readFileSync("background.jpg");

function prikaziPocetnuStranu(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(index);
} 

function nepoznatURL(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Not Found</h1>");
  response.end();
}

function OdgovorNaZahtev(request,response){
  console.log(request.url)

  switch(request.url) {
    case "/": 
    case "/index.html": 
              prikaziPocetnuStranu(response);
              break;
    case "/app.css":
              response.writeHead(200, {"Content-Type": "text/css"});
              response.end(appcss);
              break;
    case "/background.jpg":
              response.writeHead(200, {'Content-Type': 'image/jpg' });
              response.end(pozadina, 'binary');
              break;
    case "/favicon.ico":
              response.writeHead(200, {'Content-Type': 'image/gif' });
        			response.end(ikona, 'binary');
              break;
    case "/app.js":
						  response.writeHead(200, {"Content-Type": "text/plain"});
	            response.end(appjs);
	            break;
    case "/noviBlog":
             // response.end("Primio sam novi blog.");
              request.setEncoding('utf8');
              request.on('data', function (podaci) {
                response.end(podaci);
              });
              break;

      default: 
	            nepoznatURL(response);
	            break;
	}
}

var server = http.createServer(OdgovorNaZahtev);
server.listen(8007);
console.log("Server ceka zahteve na portu 8007");