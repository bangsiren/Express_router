var express = require('express');
var router = express.Router();
router.get('/api', (req, res)=>{
    res.send('Hello world i am coding')
});
router.get('/register/:name/:id', (req,res)=>{
    var names = req.params.name;
    var idNumber = req.params.id;
    res.send(`I am called ${names} registered with an id of ${idNumber}`)
});
module.exports = router;