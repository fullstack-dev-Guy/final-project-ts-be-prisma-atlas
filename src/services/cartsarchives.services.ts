import { Cart } from '../types/backendtypes'

import { CartArchives, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCartsArchives = async () => {
  try {
    const cartsArchives = await prisma.cartArchives.findMany()
    return cartsArchives
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const getCartArchivesById = async (id: string) => {
  try {
    const cartArchives = await prisma.cartArchives.findUnique({
      where: {
        id,
      },
      // include: {
      //   Order: true,
      // },
    })
    if (!cartArchives) {
      return { success: false, message: 'ID not found' }
    } else {
      return cartArchives
    }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const createCartArchives = async (data: CartArchives) => {
  try {
    const cartArchives = await prisma.cartArchives.create({
      data,
    })
    return cartArchives
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const addToCartArchives = async (id: string, data: CartArchives) => {
  try {
    const cartArchives = await prisma.cartArchives.update({
      where: {
        id,
      },
      data,
    })
    return cartArchives
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const updateManyCartArchives = async (
  id: string,
  data: CartArchives,
) => {
  try {
    const cartArchives = await prisma.cartArchives.updateMany({
      where: {
        id,
      },
      data,
    })
    return cartArchives
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const deleteCartArchives = async (id: string) => {
  try {
    const cartArchives = await prisma.cartArchives.delete({
      where: {
        id,
      },
    })
    return cartArchives
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
