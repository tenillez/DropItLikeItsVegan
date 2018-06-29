// install dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// set up Express app to parse data.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var guests = [
    {
      routeName: "cust1",
      name: "Yoda",
      number: 444-333-333,
      Email: "test@test.com",
      uniqueid: 12
    },
    {
      routeName: "cust2",
      name: "Rocky",
      number: 444-333-333,
      Email: "test2@test.com",
      uniqueid: 13
    },
    {
      routeName: "cust3",
      name: "Big Bird",
      number: 444-333-333,
      Email: "test1@test.com",
      uniqueid: 14
    }
   ];
//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/api/guests/:guests", function (req,res){
    var chosen = req.params.guests;

    console.log(chosen);

    for (var i = 0; i < guests.length; i++) {
        if (chosen === guests[i].routeName) {
            return res.json(guests[i]);
        }
    }
    return res.json(false);

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });