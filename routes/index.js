import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', function (req, res) {
  if (req.user) {
    res.redirect(`/profiles/${req.user.profile._id}`)
  }
  else {res.render('index', {
    title: 'landing'
  })}
})

export {
  router
}
