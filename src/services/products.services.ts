import { Product1 } from '../types/backendtypes'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany()
    return products
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })
    if (!product) {
      return { success: false, message: 'ID not found' }
    } else {
      return product
    }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const createProduct = async (data: Product1) => {
  try {
    const product = await prisma.product.create({
      data,
    })
    return product
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const updateProduct = async (id: string, data: Product1) => {
  try {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data,
    })
    return product
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const deleteProduct = async (id: string) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    })
    return product
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
