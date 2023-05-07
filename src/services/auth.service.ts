import prisma from '../config/database.config'
import { IUser } from '../types/backendtypes'

//const prisma = require('../config/database.config')
const bcrypt = require('bcrypt')

const hashPassword = (password) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  } catch (error) {
    console.error(error)
  }
}

const verifyPassword = async (password, hash) => {
  try {
    const isValid = bcrypt.compareSync(password, hash)
    return isValid
  } catch (error) {
    console.log(error)
    return false
  }
}

const registerUser = async (data) => {
  try {
    const { password, ...restOfData } = data
    const hash = hashPassword(password)
    const user = await prisma.user.create({
      data: { hash, ...restOfData },
    })
    console.log(user)
    return user
      ? { success: true, message: 'User created!' }
      : { success: false, message: 'Could not create user' }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

const loginUser = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      throw Error('Invalid Credentials')
    }
    const { hash, ...restOfUser } = user
    const isValid = await verifyPassword(password, hash)
    if (!isValid) {
      throw Error('Invalid Credentials')
    }
    return { success: true, user: restOfUser }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

module.exports = { registerUser, loginUser }
