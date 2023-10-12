import React from 'react'
import Task from './Task'

const Tasks = ({task, deleteTask, toggleReminder}) => {

    
  return (
    <div>
       {task.map((t)=>{
        return(
            // Each Map Item should have a unique ID to prevent errors in Console Log.
            <Task key={t.id} task={t} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
        )
       })}
    </div>
  )
}

export default Tasks

// We have used the following task list with useState 

    // const tasks=[{
    //     id:1,
    //     name:"Buy Groceries",
    //     description:'I need to buy grocery for my family',
    //     due: "16th February, 2021"
    // },
    // {
    //     id:2,
    //     name:"Buy Clothes",
    //     description:'I need to buy clothes for my family',
    //     due: "16th February, 2021"
    // },
    // {
    //     id:3,
    //     name:"Buy Shoes",
    //     description:'I need to buy shoes for my family',
    //     due: "16th February, 2021"
    // }];