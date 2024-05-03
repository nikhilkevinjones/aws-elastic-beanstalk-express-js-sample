const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello nkj welcome to AWS, now i am testing the full change!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
