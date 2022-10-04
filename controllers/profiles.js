import { Profile } from "../models/profile.js"
import { Task } from "../models/task.js"

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
    Task.find({client: req.params.id})
    .then(tasks =>  {
      res.render('profiles/show', {
        title: 'profile',
        profile,
        tasks,
      })
    })
  })
}



export{
  index,
  show,

}