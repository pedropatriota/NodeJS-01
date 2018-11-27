const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

//middlewares:
const middlewareTeste = (req, res, next)=>{
  const {age}= req.query

  if (!age){
    res.redirect ("/");
  } else{
  return next();
  }
}

//rotas:
app.get("/", (req, res) => {
  return res.render("rota_inicial");
});

app.post("/check", (req, res) => {
  const { age } = req.body;

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`);
  } else {
    return res.redirect(`/minor?age=${age}`);
  }
});

app.get("/major", middlewareTeste, (req, res) => {
  const { age } = req.query;
  return res.render("major", { age });
});

app.get("/minor", middlewareTeste, (req, res) => {
  const { age } = req.query;
  return res.render("minor", {age});
});

app.listen(3000);
