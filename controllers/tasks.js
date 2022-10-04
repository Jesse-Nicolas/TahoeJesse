import { Task } from "../models/task.js"

function index(req, res)  {
  Task.find({})
  .then(tasks =>  {
    res.render('tasks/index', {
      tasks: tasks,
      title: 'all tasks',
    })
  })
  .catch(err => {
    console.log(err),
    res.redirect('/')
  })
}

function create(req, res)  {
  req.body.client = req.user.profile._id
  Task.create(req.body)
  .then(task => {
    console.log(task)
    res.redirect('/tasks')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  }) 
}

export{
  index,
  create,

}