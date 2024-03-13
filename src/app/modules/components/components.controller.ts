import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { ComponentsService } from './components.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'

const createComponent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ComponentsService.createComponent(req.body)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Component created successfully',
      data: result.data,
    })
  },
)

const getComponents: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, [
      'searchTerm',
      'model',
      'brand',
      'category',
    ])
    const paginationOptions = pick(req.query, [
      'page',
      'limit',
      'sortBy',
      'sortOrder',
    ])
    const result = await ComponentsService.getComponents(
      filters,
      paginationOptions,
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Components fetched successfully',
      meta: result.meta,
      data: result.data,
    })
  },
)

export const ComponentController = { createComponent, getComponents }
