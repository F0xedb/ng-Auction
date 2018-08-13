const express = require('express');
const app = express();

let number = 0;

app.get("/product", function(request,response){
	number++;
	var obj = {id : number, Content : "Hello from the server"};
  console.log("Received GET request [CURRENT_ID]: " + number + " Generated Obj: " + JSON.stringify(obj));
  response.writeHead(200, {"Content-Type": "application/json",
				 "Access-Control-Allow-Origin": "*"
				})
	response.write(JSON.stringify(obj))
	console.log('wrote a response');
	response.end();
	}
);

app.delete("/product", function(request,response){

        number--;
	      var obj = {id : number, Content : "Deleted number"};
        console.log("Received DELETE request [CURRENT_ID]: " + number + " Generated Obj: " + JSON.stringify(obj));


        response.writeHead(200, {"Content-Type": "application/json",
				                         "Access-Control-Allow-Origin": "*"});
        response.write(JSON.stringify(obj))
        console.log('wrote a response');
        response.end();
        }
);

app.post("/product", function(request,response){
  console.log("POST methode");
  console.log(request.body);
  var obj = {id : number, Content : "Deleted number"};


  response.writeHead(200, {"Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"});
  response.write(JSON.stringify(obj));
  console.log('wrote a response');
  response.end();
});

app.use(function (req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(3000, () => console.log("Starting the server"));
