const express = require('express');

const app = express();

app.use(express.json());

let tasks = [];


app.get("/", (req, res) => {
    res.send("backend is runnnnnnnnnning....")
})

//lesson one task
app.get("/api/health", (req, res) => {
    res.json({
    status: "ok",
    message: "API is healthy"
    })
})
//---------------

app.get('/api/tasks', (req, res) => {
    res.json({
        success: true,
        data: tasks,
    })
})

app.post('/api/tasks', (req, res) => {
    const title  = req.body

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "title is required"
        })
    }

    const newTask = {
        id: Date.now(),
        title,
        completed:false,
    };
    tasks.push(newTask);

    res.status(201).json({
        success: true,
        data: newTask,
    })
})


app.get('/api/tasks:id', (res , req) => {

    const id = req.params

    const task = tasks.find((task) => { task == id })

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"

        })
    }

    res.json({
        success: true,
        data: task,
    })

})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})