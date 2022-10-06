import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
import { isLoggedIn } from '../middleware/middleware.js'
import { isAdmin } from '../middleware/middleware.js' 

const router = Router()

router.get('/', isLoggedIn, isAdmin, tasksCtrl.index)

router.get('/:id', isLoggedIn, tasksCtrl.show)

router.post('/', isLoggedIn, tasksCtrl.create)

router.post('/:id/arrangements', isLoggedIn, isAdmin, tasksCtrl.addArrangement)

router.put('/:id', isLoggedIn, tasksCtrl.update)

router.put('/:id/arrangements/:id', isLoggedIn, isAdmin, tasksCtrl.updateArrangement)

router.delete('/:id', isLoggedIn, tasksCtrl.delete)

router.delete('/:id/arrangements/:id', isLoggedIn, isAdmin, tasksCtrl.deleteArrangement)


export {
  router
}