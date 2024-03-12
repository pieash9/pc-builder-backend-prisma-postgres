/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { CategoryRoutes } from '../modules/catagories/catagories.routes'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
