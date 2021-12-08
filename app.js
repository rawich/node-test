const express = require('express');
const app = express();
const version = "1.0.0";
const port = 80;

let counter = 0;


app.get('/', (req, res) => {
    console.log(`GET #${++counter}`);
    const output = `Hello - Version: ${version} / Count: ${counter}`;
    res.send(output);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})