import { PrismaClient, Users } from '@prisma/client'

const prisma = new PrismaClient()

const createUser = async (data: Users): Promise<Users> => {
  const result = await prisma.users.create({ data })
  return result
}

const getUsers = async (): Promise<Users[]> => {
  const result = await prisma.users.findMany()
  return result
}

const getUser = async (id: string): Promise<Users | null> => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateUser = async (
  id: string,
  data: Partial<Users>,
): Promise<Users | null> => {
  const result = await prisma.users.update({
    where: {
      id,
    },
    data,
  })
  return result
}

const deleteUser = async (id: string): Promise<Users | null> => {
  const result = await prisma.users.delete({
    where: {
      id,
    },
  })
  return result
}

export const UserService = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
}
