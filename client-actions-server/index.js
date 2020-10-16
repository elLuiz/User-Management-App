const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cookies = require('cookie-parser');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cookies());
app.use(routes);

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
