// install dependencies
var app = express();
var PORT = process.env.PORT || 3000;

// set up Express app to parse data.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("")