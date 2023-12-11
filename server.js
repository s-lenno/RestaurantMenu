const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is your restaurant server!');
});

let orders = [];

app.post('/place-order', (req, res) => {
    const order = req.body;

    orders.push(order);

    res.json({ message: 'Order placed successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
