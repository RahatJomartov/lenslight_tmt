import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
     res.send('Index sahypasy');
});

app.listen(port, () => {
     console.log('Kod üstünlikli işleýär Rahat');
});