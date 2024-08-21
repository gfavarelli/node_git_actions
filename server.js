var express = require("express");
var app = express();



app.get("/git", function (req, res) {
    console.log("Teste")
    res.send({sucesso: "Teste GitHub Actions"});
});
  

app.listen(8000, function () {
    console.log("Rodando na porta 8000");
});