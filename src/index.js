const express = require("express");
const request = require("request");
const app = express();

app.use(express.json());

const dataSms = [];

app.post("/receive", (req, res) => {
  const dados =  { customerReferenceId, phone } = req.body;

  if (customerReferenceId === "" && phone === "") {
    return res.status(400).json({ error: "Nenhum dado recebido" });
  }

  request('https://www.google.com.br', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response.statusCode)
    console.log('body:', dados)
  })

  // dataSms.push({
  //   customerReferenceId,
  //   phone,
  // });
  return res.status(201).send();
  
});

app.listen(3000, () => console.log("Server is running"));


