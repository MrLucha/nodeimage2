const express = require('express');

const app = express();



app.use(express.json());



const students = [

    {id: 1, name: 'Diana', age:22},

    {id: 2, name: 'Ana', age:22},

    {id: 3, name: 'Diana2', age:22},

    {id: 4, name: 'Evil Diana', age:22},

];



app.get('/',(req,res) => {

    res.send('Node JS Api');

});



app.get('/test',(req,res) => {

var aux=res.statusCode;

    res.send(`El status es: ${aux}`);

    //res.send('Thats ok');

});



app.get('/api/students',(req,res) => {

    res.send(students);

});



const port = process.env.port || 8015;

console.log(port);

app.listen(port, () => console.log(`Escuchando en puerto ${port}`));