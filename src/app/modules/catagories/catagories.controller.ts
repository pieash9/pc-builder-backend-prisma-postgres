import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { CategoryService } from './catagories.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body

    const result = await CategoryService.createCategory(data)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created Successfully',
      data: result.data,
    })
  },
)

export const CategoryController = { createCategory }
