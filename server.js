require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

require('./config/database')

const productRouter = require('./router/product')
const orderRouter = require('./router/order')

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(cors())
app.use(morgan("dev"))

app.use('/product', productRouter)
app.use('/order', orderRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connect server..."))