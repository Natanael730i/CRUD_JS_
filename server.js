const express = require('express');
const bodyParser = require('body-parser');
const app = express('');
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://NodeJs:MyDbForLearning@mongodbcomnodejs-8gxkf.gcp.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(uri, (err, client) => {
    
    if(err)return console.log(err);
    db = client.db('NodeJs');

    app.listen(3000, () => {
        console.log('server runing on port 3000');
    });

});


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.use(bodyParser.urlencoded({ extended : true }));

app.post('/show', (req, res)=> {

    db.collection('data').save(req.bosy, (err, result) => {
        if(err)return console.log(err);
        
        console.log('Salvo no banco de dados!');
    })

})
