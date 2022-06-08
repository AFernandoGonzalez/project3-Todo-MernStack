import React, { useState } from 'react'

const TaskForm = (props) => {

    const [taskInput, setTaskInput] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const onChangeTaskHandler = (e) => {
        setTaskInput(e.target.value)
    }

    const onChangeDescriptionHandler = (e) => {
        setTaskDescription(e.target.value)
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(taskInput.length === 0 || taskDescription.length === 0){
            return;
        }
        props.onAddTask(taskInput,taskDescription)
        setTaskInput('');
        setTaskDescription('');
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type='text'
                    name='task'
                    id='task'
                    value={taskInput}
                    onChange={onChangeTaskHandler}
                />
                <input
                    type='text'
                    name='description'
                    id='description'
                    value={taskDescription}
                    onChange={onChangeDescriptionHandler}
                />

                <button type='submit' value='submit' >Add task</button>
            </form>
        </div>
    )
}

export default TaskForm