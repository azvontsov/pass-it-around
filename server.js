const express = require('express');

const app = express();



app.get('/:number_of_bottles', (req, res) => {
    const pageOfBottles = (req.params.number_of_bottles - 1);
    const randomBottle = Math.floor(Math.random() * pageOfBottles);
    if (pageOfBottles < 2) {
        res.send(`
        <style>
        .ch10 {
            display: block;
            width: 13ch;
            word-break: break-all;
            color: black;
          }
        </style>
        <center><h2>The ${pageOfBottles} bottles of beer on the wall</h2></center>
        <center><h2>The ${pageOfBottles} bottles of the beer</h2></center>
        <center><h2><a class="ch10" href="/99">take one down, start over</a></h2></center>
        `);
    } else if (pageOfBottles === randomBottle) {
        res.send(`
        <style>
        .ch10 {
            display: block;
            width: 13ch;
            word-break: break-all;
            color: black;
          }
        </style>
        <center><h2>The ${pageOfBottles} bottles of beer on the wall</h2></center>
        <center><h2>The ${pageOfBottles} bottles of the beer</h2></center>
        <center><h2><a class="ch10" href="/99">take one down, start over</a></h2></center>
        <center><h2>The ${pageOfBottles + 1} bottles of beer on the wall</h2></center>
        `);
    } else {
        res.send(`
        <style>
        .ch10 {
            display: block;
            width: 13ch;
            word-break: break-all;
            color: black;
          }
        </style>
        <center><h2>The ${pageOfBottles} bottles of beer on the wall</h2></center>
        <center><h2>The ${pageOfBottles} bottles of the beer</h2></center>
        <center><h2><a a class="ch10" href="${pageOfBottles}">take one down, pass it around</a></h2></center>
        `);
    }
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})