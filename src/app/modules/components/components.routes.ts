import express from 'express'
import { ComponentController } from './components.controller'

const router = express.Router()

router.post('/create-component', ComponentController.createComponent)

router.get('/', ComponentController.getComponents)

export const ComponentRoutes = router
