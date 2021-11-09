const express = require('express');

const app = express();

app.get('/', (req, res) => {
    
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>
    `);
})
app.get('/:number_of_bottles', (req,res) => {
    res.send(`The number of bottles of beer on the wall ${}`)
})



app.listen(3000, () => {
    console.log('listening on port 3000');
})