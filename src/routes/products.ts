import express from 'express'

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/products.services'
const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

router.get('/:id', async (req, res) => {
  const product = await getProductById(req.params.id)
  res.send(product)
})

router.post('/', async (req, res) => {
  const product = await createProduct(req.body)
  res.send(product)
})

router.put('/:id', async (req, res) => {
  const product = await updateProduct(req.params.id, req.body)
  res.send(product)
})

router.delete('/:id', async (req, res) => {
  const product = await deleteProduct(req.params.id)
  res.send(product)
})

export default router
