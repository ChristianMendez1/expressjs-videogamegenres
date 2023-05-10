const express = require('express')

const app = express();
const port = 3000 

// Data
const actionadventure = require('./models/actionadventure.js');
const fps = require('./models/fps.js');
const rpg = require('./models/rpg.js');
const sandbox = require('./models/sandbox.js');
const fighting = require('./models/fighting.js');

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Routes Here
app.get('/', function(req, res){
    res.render('home/Index');
});   

app.get('/actionadventure', function(req, res){
    res.render('actionadventure/Index', { actionadventure: actionadventure });
});   

app.get('/fps', function(req, res){
    res.render('fps/Index', { fps: fps });
});   

app.get('/rpg', function(req, res){
    res.render('rpg/Index', { rpg: rpg });
});   

app.get('/sandbox', function(req, res){
    res.render('sandbox/Index', { sandbox: sandbox });
});   

app.get('/fighting', function(req, res){
    res.render('fighting/Index', { fighting: fighting });
});   

app.get('/actionadventure/:indexOfActionAdventureArray', function(req, res){
    res.render('actionadventure/Show', {
        actionadventure: actionadventure[req.params.indexOfActionAdventureArray]
    });
});      

app.get('/fps/:indexOfFpsArray', function(req, res){
    res.render('fps/Show', { 
        fps: fps[req.params.indexOfFpsArray] 
    });
});      

app.get('/rpg/:indexOfRpgArray', function(req, res){
    res.render('rpg/Show', { 
        rpg: rpg[req.params.indexOfRpgArray] 
    });
});      

app.get('/sandbox/:indexOfSandboxArray', function(req, res){
    res.render('sandbox/Show', { 
        sandbox: sandbox[req.params.indexOfSandboxArray] 
    });
});      

app.get('/fighting/:indexOfFightingArray', function(req, res){
    res.render('fighting/Show', { 
        fighting: fighting[req.params.indexOfFightingArray] 
    });
});      

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});