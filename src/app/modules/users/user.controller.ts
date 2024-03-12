import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await UserService.createUser(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  })
})

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUsers()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users are fetched successfully',
    data: result,
  })
})

const getUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await UserService.getUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is fetched successfully',
    data: result,
  })
})

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const data = req.body
  const result = await UserService.updateUser(id, data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated successfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await UserService.deleteUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted successfully',
    data: result,
  })
})

export const UserController = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
}
