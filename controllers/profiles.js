import { Profile } from "../models/profile.js"
import { Task } from "../models/task.js"

function index(req, res)  {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index',  {
      title: 'All Profiles',
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
    const isSelf = profile._id.equals(req.user.profile._id)
    Task.find({client: req.params.id})
    .then(tasks =>  {
      res.render('profiles/show', {
        title: 'My Profile',
        profile,
        tasks,
        isSelf,
      })
    })
  })
  .catch(err  =>  {
    console.log(err)
    res.redirect('/profiles')
  })
}



export{
  index,
  show,

}