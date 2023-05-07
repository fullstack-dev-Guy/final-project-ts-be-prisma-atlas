import express from 'express'
import {
  addToOrder,
  createOrder,
  deleteOrder,
  getOrders,
  getorderById,
  updateMany,
} from '../services/order.service'

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const orders = await getOrders()
  res.send(orders)
})

router.get('/:id', async (req, res) => {
  const order = await getorderById(req.params.id)
  res.send(order)
})
router.put('/:id', async (req, res) => {
  const order = await addToOrder(req.params.id, req.body)
  res.send(order)
})

router.put('/:id', async (req, res) => {
  const order = await updateMany(req.params.id, req.body)
  res.send(order)
})

router.post('/', async (req, res) => {
  const order = await createOrder(req.body)

  res.send(order)
  //////////////////////////////////////////

  //////////////////////////////////////////
})

router.delete('/:id', async (req, res) => {
  const order = await deleteOrder(req.params.id)
  res.send(order)
})

export default router
