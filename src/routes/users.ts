import { Request, Response } from 'express'
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../services/users.service'
import express from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', async (req: Request, res: Response) => {
  const users = await getUsers()
  res.send(users)
})

router.get('/:id', async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})

router.post('/', async (req: Request, res: Response) => {
  const user = await createUser(req.body)
  res.send(user)
})

router.put('/:id', async (req: Request, res: Response) => {
  const user = await updateUser(req.params.id, req.body)
  res.send(user)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const user = await deleteUser(req.params.id)
  res.send(user)
})

export default router
