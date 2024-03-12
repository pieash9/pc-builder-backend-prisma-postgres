import { Category, PrismaClient } from '@prisma/client'
import { IGenericResponse } from '../../../interfaces/common'

const prisma = new PrismaClient()

const createCategory = async (
  data: Category,
): Promise<IGenericResponse<Category>> => {
  const result = await prisma.category.create({ data })
  return { data: result }
}

export const CategoryService = { createCategory }
