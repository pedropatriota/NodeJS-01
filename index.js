const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
});

app.set('viewengine', 'njk');

//middlewares:

//rotas:
app.post("/", (req, res)=>{
  
});