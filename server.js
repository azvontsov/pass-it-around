const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send(`
    <center><h1>99 Bottles of beer on the wall</h1></center>
    <center><a href="/98">take one down, pass it around</a></center>
    `);
})

app.get('/:number_of_bottles', (req, res) => {
    const pageOfBottles = (req.params.number_of_bottles - 1);
    if (pageOfBottles < 2) {
        res.send(`
        <center><h2>The number of bottles of beer on the wall</h2><h1>${pageOfBottles}</h1></center>
        <center><a href="/99">take one down, start over</a></center>
        `);
    } else {
        res.send(`
        <center><h2>The number of bottles of beer on the wall</h2><h1>${pageOfBottles}</h1></center>
        <center><a href="${pageOfBottles}">take one down, pass it around</a></center>
        `);
    }
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})