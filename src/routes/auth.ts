const express = require('express')
const { registerUser, loginUser } = require('../services/auth.service')
const router = express.Router()

router.post('/register', async (req, res) => {
  const result = await registerUser(req.body)
  res.send(result)
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result = await loginUser(email, password)
  if (result.success) {
    req.session.user = result.user
  }
  res.send(result)
})

// router.get("/logout", (req, res))

router.get('/check', (req, res) => {
  console.log({ session: req.session, user: req.session.user })
})

export default router
