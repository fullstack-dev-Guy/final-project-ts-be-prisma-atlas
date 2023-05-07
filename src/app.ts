import express from 'express'
import { config } from 'dotenv'
import initialMiddlewares from './middleware'

import productsRouter from './routes/products'
import cartsRouter from './routes/carts'
import cartsArchivesRouter from './routes/cartsarchives'
import session from 'express-session'
import authRoutes from './routes/auth'
import usersRouter from './routes/users'
import ordersRouter from './routes/order'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import * as path from 'path'

config({ path: `.env.${process.env.NODE_ENV}.local` })

const app = express()

app.use(express.json())

app.use(cors())

app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    name: 'sarcafe',
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 10, //10 min
    },
  }),
)
var views: number = 0
///////////////////////////////////
// Serve static assets
app.use(express.static(path.join(__dirname, 'build')))

// Always serve the index.html file for any request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
///////////////////////////////////

//app.use(function (req, res, next) {
//  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
//
//  res.header('Access-Control-Allow-Methods', 'GET,DELETE,HEAD,OPTIONS,POST,PUT')
//  res.header(
//    'Access-Control-Allow-Headers',
//    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//  )
//  next()
//})

initialMiddlewares(app)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/routes/users', usersRouter)
app.use('/routes/products', productsRouter)
app.use('/routes/carts', cartsRouter)
app.use('/routes/cartsarchives', cartsArchivesRouter)
app.use('/routes/orders', ordersRouter)
app.use('/auth', authRoutes)

export default app
