import { Order, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getOrders = async () => {
  try {
    const orders = await prisma.order.findMany()
    return orders
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const getorderById = async (id: string) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
      // include: {
      //   Order: true,
      // },
    })
    if (!order) {
      return { success: false, message: 'ID not found' }
    } else {
      return order
    }
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const createOrder = async (data: Order) => {
  try {
    const order = await prisma.order.create({
      data,
    })
    return order
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const addToOrder = async (id: string, data: Order) => {
  try {
    const order = await prisma.order.update({
      where: {
        id,
      },
      data,
    })
    return order
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const updateMany = async (id: string, data: Order) => {
  try {
    const order = await prisma.order.updateMany({
      where: {
        id,
      },
      data,
    })
    return order
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}

export const deleteOrder = async (id: string) => {
  try {
    const order = await prisma.order.delete({
      where: {
        id,
      },
    })
    return order
  } catch (error) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
