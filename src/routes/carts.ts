import express from 'express'
import session from 'express-session'
import {
  getCarts,
  getCartById,
  createCart,
  //updateCart,
  addToCart,
  deleteCart,
  updateMany,
} from '../services/carts.services'
import { Cart } from '@prisma/client'

const router = express.Router()
declare module 'express-session' {
  interface SessionData {
    cart: Cart
  }
}

/* GET users listing. */
router.get('/', async (req, res) => {
  const carts = await getCarts()
  res.send(carts)
})

router.get('/:id', async (req, res) => {
  const cart = await getCartById(req.params.id)
  res.send(cart)
})
router.put('/:id', async (req, res) => {
  const cart = await addToCart(req.params.id, req.body)
  res.send(cart)
})

router.put('/:id', async (req, res) => {
  const cart = await updateMany(req.params.id, req.body)
  res.send(cart)
})

router.post('/', async (req, res) => {
  const cart = await createCart(req.body)

  req.session.cart = cart

  res.send(cart)
})

//router.put('/:id', async (req, res) => {
//  const product = await updateCart(req.params.id, req.body)
//  res.send(product)
//})

router.delete('/:id', async (req, res) => {
  const cart = await deleteCart(req.params.id)
  res.send(cart)
})

export default router
