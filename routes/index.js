import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', function (req, res) {
  res.redirect(`/profiles/${req.user.profile._id}`)
})

export {
  router
}
