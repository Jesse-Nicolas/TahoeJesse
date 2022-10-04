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
    res.redirect(`/profiles/${task.client}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  }) 
}

function show(req, res) {
  Task.findById(req.params.id)
  .then(task => {
    res.render('tasks/show', {
      task: task,
      title: 'show task'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function update(req, res) {
  Task.findById(req.params.id)
  .then(task => {
    task.updateOne(req.body, {new: true})
    .then(() => {
      res.redirect(`/profiles/${task.client}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function deleteTask(req, res) {
  Task.findByIdAndDelete(req.params.id)
  .then(task => {
    res.redirect(`/profiles/${task.client}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function addArrangement(req, res) {
  Task.findById(req.params.id)
  .then(task => {
    task.arrangements.push(req.body)
    task.save()
    .then(() => {
      res.redirect(`/tasks/${task.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export{
  index,
  create,
  show,
  update,
  deleteTask as delete,
  addArrangement,
}