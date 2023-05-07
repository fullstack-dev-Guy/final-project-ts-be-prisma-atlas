import { Cart } from '../types/backendtypes'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCarts = async () => {
  try {
    const carts = await prisma.cart.findMany()
    return carts
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const getCartById = async (id: string) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: {
        id,
      },
      // include: {
      //   Order: true,
      // },
    })
    if (!cart) {
      return { success: false, message: 'ID not found' }
    } else {
      return cart
    }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const createCart = async (data: Cart) => {
  try {
    const cart = await prisma.cart.create({
      data,
    })
    return cart
  } catch (error) {
    console.error(error)
    return //{ success: false, message: error.message }
  }
}

export const addToCart = async (id: string, data: Cart) => {
  try {
    const cart = await prisma.cart.update({
      where: {
        id,
      },
      data,
    })
    return cart
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const updateMany = async (id: string, data: Cart) => {
  try {
    const cart = await prisma.cart.updateMany({
      where: {
        id,
      },
      data,
    })
    return cart
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const deleteCart = async (id: string) => {
  try {
    const cart = await prisma.cart.delete({
      where: {
        id,
      },
    })
    return cart
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
