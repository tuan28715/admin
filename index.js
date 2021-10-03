const express = require('express'); 
const server = express(); 
const cors = require('cors');
server.use(express.json());
server.use(cors());


// Serve only the static files form the dist directory
server.use(express.static(__dirname + '/dist/admin'));

server.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/admin/index.html'));
});

server.listen(process.env.PORT || 3000, function(){
    console.log("Your app running on port 3000");
})