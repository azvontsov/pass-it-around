const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take one down, pass it around</a>
    `);
})

app.get('/:number_of_bottles', (req, res) => {
    const pageOfBottles = (req.params.number_of_bottles - 1);
    if (pageOfBottles < 1) {
        res.send(`
        <h2>The number of bottles of beer on the wall</h2><h1>${pageOfBottles}</h1>
        <a href="/99">take one down, start over</a>
        `);
    } else {
        res.send(`
        <h2>The number of bottles of beer on the wall</h2><h1>${pageOfBottles}</h1>
        <a href="${pageOfBottles}">take one down, pass it around</a>
        `);
    }
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})