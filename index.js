const express = require('express')
const helloFile = require('./routes/hello')
const about = require('./routes/about')
const app = express();
const port = process.env.port || 4000;

app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.use('/',helloFile)
app.use('/api', about)

app.listen(port,()=>{
    console.log('Server is running in port 4000');
})