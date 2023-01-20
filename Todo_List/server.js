import express from "express";
import { body , validationResult } from "express-validator";

const app = express();
app.use(express.json())

let tasks = [
        {
            "id": 1,
            "title": "task number 1",
            "description": "This is a task",
            "isCompleted": 1
        },
        {
            "id": 2,
            "title": "task number 2",
            "description": "This is a task",
            "isCompleted": 1
        }
]

//////First end point for adding new task
app.post('/NewTask',
[
    //middleware to validate the data
    body('id').exists().notEmpty().bail().withMessage("Error, Id must be provided").isNumeric().withMessage("Invalid id"),
    body('title').exists().notEmpty().withMessage("Please insert a title for the task").bail(),
    body('description').exists().notEmpty().withMessage("Please provide desctiption for the task").bail(),
    body('isCompleted').exists().notEmpty().withMessage("Please provide the state of the task").bail().isBoolean().withMessage("Invalid value for the state")
]
,(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()) res.status(422).jsonp(errors.array())   
    else{
        let task = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted
        }
        tasks.push(task)
        res.send(task)
    }
})

/////Second end point for getting all tasks
app.get('/tasks',(req, res)=>{
    if(tasks.length === 0) res.send("No Tasks added yet")
    else{
    res.send(tasks)
}
})

/////Third end point for getting specific task
app.get(`/tasks/:id`
,(req, res)=>{
    const id = parseInt(req.params.id);
    let task = tasks.find((task)=> task.id === id)
    if(task === undefined) res.send("Task doesn't Exist")
    res.send(task)
})

/////Fourth end point for deleting an existing task
app.delete(`/tasks/:id`, (req, res)=>{
    let id = parseInt(req.params.id)
    tasks = tasks.filter((task)=>{
        if(task.id === id) return false
        return true
    })
    res.send(tasks)
})



app.listen(3000, ()=>{
    console.log(`🚀 Server ready at: http://localhost:3000`)
})