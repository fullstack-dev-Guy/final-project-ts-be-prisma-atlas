import express, { Request, Response } from 'express'
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

app.use(
  cors({
    origin: 'https://sarcafe-since-2022.onrender.com',
  }),
)

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

app.get('/about', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/about')
})

app.get('/menu', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/menu')
})

app.get('/allproducts', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/allproducts')
})

app.get('/blogs', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/blogs')
})

app.get('/coupons', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/coupons')
})

app.get('/openingtimes', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/openingtimes')
})

app.get('/contactform', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/contactform')
})

app.get('/register', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/register')
})

app.get('/tosignin', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/tosignin')
})

app.get('/shoppingcartdummy', (req: Request, res: Response) => {
  res.redirect('https://sarcafe-since-2022.onrender.com/shoppingcartdummy')
})

export default app
