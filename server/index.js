const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(port, () => {
  console.log(`Top-Navigation app is listening at http://localhost:${port}`);
});
