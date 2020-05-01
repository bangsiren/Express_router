var express = require('express');
var router = express.Router();
router.get('/about/:town/:location', (req, res)=>{
    res.send(JSON.stringify(req.params));
});
router.post('/about', (req, res)=>{
    res.send({type: 'POST'})
});
router.put('/about/:type', (req, res)=>{
    res.send({type: 'PUT'})
});
router.delete('/about', (req, res)=>{
    res.send({type: 'DELETE'})
});
router.get('/hero/:name/:id', (req,res)=>{
    var names = req.params.name;
    var idNumber = req.params.id;
    res.send(`I am called ${names} registered with an id of ${idNumber}`)
});
module.exports = router;