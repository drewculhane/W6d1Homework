require('dotenv').config();

const express = require("express"); 
const app=express();
const port = process.env.PORT || 3000; 
const birdsdata = require("./db/birds"); 


app.get('/', (req,res) => {
    res.send("This is the Birds Homepage. Hooray")
})
app.get('/Birds', (req,res) => {
    res.json(birdsdata); 
})
app.get('/birds/:id', (req, res) =>{
    if (birdsdata[req.params.id]) {
        res.send(birdsdata[req.params.id]);
        console.log("Retreiving data for bird, starting at data index 0, ", +req.params.id)
    } else {
        res.send('Bird ID not valid.')
    }
})
app.listen(port, () => {
    console.log("Listening on port " + port);
});