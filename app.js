var express      = require("express"),
app              = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
  
   res.render("circles");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});
