import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', tasksCtrl.index)

router.get('/:id', tasksCtrl.show)

router.post('/', tasksCtrl.create)

router.post('/:id/arrangements', tasksCtrl.addArrangement)

router.put('/:id', tasksCtrl.update)

router.put('/:id/arrangements/:id', tasksCtrl.updateArrangement)

router.delete('/:id', tasksCtrl.delete)

router.delete('/:id/arrangements/:id', tasksCtrl.deleteArrangement)


export {
  router
}