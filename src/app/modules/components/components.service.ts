import { Component, PrismaClient } from '@prisma/client'
import { IGenericResponse } from '../../../interfaces/common'

const prisma = new PrismaClient()

const createComponent = async (
  data: Component,
): Promise<IGenericResponse<Component>> => {
  const result = await prisma.component.create({ data })
  return { data: result }
}

export const ComponentsService = { createComponent }
