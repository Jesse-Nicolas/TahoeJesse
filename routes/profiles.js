import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'
import { isAdmin } from '../middleware/middleware.js' 

const router = Router()

router.get('/', isLoggedIn, isAdmin, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)


export {
  router
}