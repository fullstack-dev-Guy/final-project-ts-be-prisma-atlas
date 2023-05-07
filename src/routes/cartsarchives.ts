import express from 'express'
import session from 'express-session'
import {
  addToCartArchives,
  createCartArchives,
  deleteCartArchives,
  getCartArchivesById,
  getCartsArchives,
  updateManyCartArchives,
} from '../services/cartsarchives.services'

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const carts = await getCartsArchives()
  res.send(carts)
})

router.get('/:id', async (req, res) => {
  const cart = await getCartArchivesById(req.params.id)
  res.send(cart)
})
router.put('/:id', async (req, res) => {
  const cart = await addToCartArchives(req.params.id, req.body)
  res.send(cart)
})

router.put('/:id', async (req, res) => {
  const cart = await updateManyCartArchives(req.params.id, req.body)
  res.send(cart)
})

router.post('/', async (req, res) => {
  const cart = await createCartArchives(req.body)

  res.send(cart)
  //////////////////////////////////////////

  //////////////////////////////////////////
})

//router.put('/:id', async (req, res) => {
//  const product = await updateCart(req.params.id, req.body)
//  res.send(product)
//})

router.delete('/:id', async (req, res) => {
  const cart = await deleteCartArchives(req.params.id)
  res.send(cart)
})

export default router
