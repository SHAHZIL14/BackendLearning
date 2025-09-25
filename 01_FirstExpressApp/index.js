import express from "express"
// modules 

const app = express();
const PORT = 3000;
// Variables 

app.get('/', (req, res) => {
  res.send(`First express server`);
});

app.listen(PORT, () => {
  console.log(`Application has started listening to port : ${PORT}`)
});