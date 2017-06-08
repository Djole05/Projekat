var http = require("http");
var fs = require("fs");
var svi_blogovi=[]

// Kesiranje statickih fajlova
var pocetna = fs.readFileSync("index.html","utf8");
var appcss = fs.readFileSync("app.css","utf8");
var appjs = fs.readFileSync("app.js","utf8");
var ikona = fs.readFileSync("favicon.ico");
var pozadina = fs.readFileSync("background.jpg");

function prikaziPocetnuStranu(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile("blogovi.txt", "utf8", function(error, text) {
       if (error)
          return;
        svi_blogovi = JSON.parse(text);
        var blogovi =""
        for(i=svi_blogovi.length-1;i>=0;i--){
          naslov = svi_blogovi[i].naslov
          autor = svi_blogovi[i].autor
          blog = svi_blogovi[i].blog
          email = svi_blogovi[i].email
          blogovi += "<section> <h1>" + naslov + "</h1>"
          blogovi += "<h3>" + autor + "</h3>";  
          blogovi += "<p>" + blog + "</p>"; 
          blogovi += "<h6>" + email + "</h6> </section>"
        }
        pocetna = pocetna.replace("#blogovi#", blogovi)
  });
  response.end(pocetna);
} 

function nepoznatURL(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Not Found</h1>");
  response.end();
}

function UpisNaDisk(blogovi){
  fs.writeFile("blogovi.txt", blogovi, function(err) {
        if (err)
          console.log("Failed to write file:", err);
        else
          console.log("File written.");
});
}

function OdgovorNaZahtev(request,response){
  //console.log(request.url)

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
              request.on('data', function (novi_blog) {
                
                svi_blogovi.push(JSON.parse(novi_blog));
                UpisNaDisk(JSON.stringify(svi_blogovi));
                console.log(svi_blogovi);
                response.end(novi_blog);
              });
              break;
      default: 
	            nepoznatURL(response);
	            break;
	}
}
var port = process.env.PORT || 9999;
var server = http.createServer(OdgovorNaZahtev);
server.listen(potr);
console.log("Server ceka zahteve na portu "+port);
