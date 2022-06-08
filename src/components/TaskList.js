import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (title, description) => {
        const newTask = {
            id: new Date(),
            title: title,
            description: description
        }
        setTasks(tasks.concat(newTask))
    }

    return (
        <div>
            <TaskForm onAddTask={addTask} />
            <span>Total Items: {tasks.length} </span>
            <p>TaskList</p>
            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        title={task.title}
                        description={task.description} />
                )
            })}
        </div>
    )
}

export default TaskList