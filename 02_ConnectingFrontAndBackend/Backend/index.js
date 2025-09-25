import express from "express"
import cors from "cors"
// Modules

const APP = express();
const PORT = 3000;
// App Initialization

APP.use(cors());
// Middlewares 
const Data = [
  { id: 1, data: "Why don't scientists trust atoms? Because they make up everything!" },
  { id: 2, data: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { id: 3, data: "Why don’t skeletons fight each other? They don’t have the guts." },
  { id: 4, data: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
  { id: 5, data: "Why did the bicycle fall over? Because it was two-tired!" },
  { id: 6, data: "I’m reading a book on anti-gravity. It’s impossible to put down!" },
  { id: 7, data: "Why don’t programmers like nature? Too many bugs." },
  { id: 8, data: "Why did the math book look sad? Because it had too many problems." },
  { id: 9, data: "I would tell you a joke about UDP, but you might not get it." },
  { id: 10, data: "Why did the coffee file a police report? It got mugged." }
];


// Data 
APP.get('/', (req, res) => {
  res.send('Hello World Backend');
});

APP.get('/jokes', (req, res) => {
  res.send(Data);
})
// Req / Res

APP.listen(PORT, () => {
  console.log('App has started listening on port: ', PORT);
})
// Server