const express = require('express');
const routes = require('./routes')
const app = express();


const cookieParser = require('cookie-parser')
const cors = require('cors')

require('./database/index');

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3001)