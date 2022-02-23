const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4005;

app.use(express.static(path.join(__dirname, '../','client')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})