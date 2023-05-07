//const prisma = require("../config/database.config");

import { User } from '@prisma/client'
import prisma from '../config/database.config'

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany()
    return users
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    if (!user) {
      return { success: false, message: 'ID not found' }
    } else {
      return user
    }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const createUser = async (data: User) => {
  try {
    const user = await prisma.user.create({
      data,
    })
    return user
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const updateUser = async (id: string, data: User) => {
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    })
    return user
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })
    return user
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
