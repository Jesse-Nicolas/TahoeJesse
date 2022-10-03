import { Profile } from "../models/profile.js"

function index(req, res)  {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index',  {
      title: 'all profiles',
      profiles: profiles,
    })
  })
  .catch(err  =>  {
    console.log(err)
    res.redirect('/profiles')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile =>  {
    res.render('profiles/show', {
      title: 'profile',
      profile,
    })
  })
}

function createTask(req, res) {
  Profile.findById(req.params.id)
  .then(profile =>  {
    profile.tasks.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export{
  index,
  show,
  createTask,

}