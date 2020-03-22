// create a server, start listening on certain port

//require a libary called http to start a server
const http = require('http')

//create another libary for calling html
const fs = require('fs')

//create a variable what port we are listening to 
const port = 3000

//create our server
const server = http.createServer(function(req, res){
    //handle all different activities 
    //return some reponse to the user
    res.writeHead(200,{'Content-Type': 'text/html'})

    //read the html file
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            //write all data inside the html file
            res.write(data)
        }
        //response end
        res.end()
    })
   
})

//set up a server listen on the port we want to 
server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    } else{
        console.log('Server is on listening on port ' + port)
    }
})


asdakj