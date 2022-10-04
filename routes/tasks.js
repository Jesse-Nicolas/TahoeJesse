import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', tasksCtrl.index)

router.get('/:id', tasksCtrl.show)

router.post('/', tasksCtrl.create)

router.put('/:id', tasksCtrl.update)



export {
  router
}