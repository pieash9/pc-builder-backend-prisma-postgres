import { Component, PrismaClient } from '@prisma/client'
import { IGenericResponse } from '../../../interfaces/common'
import { componentSearchableFields } from './components.constants'
import { paginationHelpers } from '../../../helpers/paginationHelper'

const prisma = new PrismaClient()

const createComponent = async (
  data: Component,
): Promise<IGenericResponse<Component>> => {
  const result = await prisma.component.create({
    data,
    include: {
      categories: true,
    },
  })
  return { data: result }
}

const getComponents = async (
  filters: any,
  paginationOptions: any,
): Promise<IGenericResponse<Component[]>> => {
  const { searchTerm, ...filtersData } = filters

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      OR: componentSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }

  if (filtersData) {
    const filterKeys = Object.keys(filtersData)
    filterKeys.forEach(key => {
      andConditions.push({
        [key]: {
          equals: filtersData[key],
        },
      })
    })
  }

  const orderBy: any = {}

  if (sortBy && sortOrder) {
    orderBy[sortBy] = sortOrder
  }

  const result = await prisma.component.findMany({
    orderBy,
    take: limit,
    skip,

    where: {
      AND: andConditions,
    },
    include: {
      categories: true,
      reviews: true,
    },
  })

  const total = await prisma.component.count({
    where: {
      AND: andConditions,
    },
  })
  return {
    meta: {
      page: page,
      limit,
      total,
    },
    data: result,
  }
}

export const ComponentsService = { createComponent, getComponents }
