const express= require('express');
const moongose=require('mongoose');
const requireDir=require('require-dir');

const app = express();

//Iniciando DB
moongose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});
requireDir('./src/models')

const Product = moongose.model('Product');

//Primeira rota
app.get('/', (req,res)=>{
    res.send("Bolsomito 2018");
        
    Product.create({
        title: "Teste",
        description: "Description teste",
        url: "bolsonaro"
    });
});

app.listen(3001);

