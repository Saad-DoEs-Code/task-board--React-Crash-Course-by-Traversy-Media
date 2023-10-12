import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';

function App() {

  // State to display the form on button click
  const [showForm,setShowForm]=useState(false);

  // For each object, the names of attributes should be same as the original object attributes.
  const [task, setTask] = useState([]);

  // Use Effect Hook

  useEffect(() => {
    const getTasks=async()=>{
      const tasksFromServer=await fetchTask();
      setTask(tasksFromServer);
    }
    
    getTasks()
  },[])

  // Fetch Tasks
  const fetchTask=async()=>{
    const res=await fetch("http://localhost:5000/tasks");
    const data=await res.json();
    
    return data
  }





  // Events : We keep all the events in App.js

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"});
    setTask(task.filter((task) => task.id !== id));
  }

  // Set Reminder Function
  const toggleReminder =async (passID) => {
    setTask(task.map((t)=> t.id===passID? {...t, reminder:!t.reminder}:t));
    // alert("Reminder set for  " ,{passID});
  }

  // Add Task to List
  const addTask= async (taskNew)=>{
    // let id=Math.floor(Math.random()*1000)+1;
    // // console.log(taskNew);
    // let newTask={id, ...taskNew}
    // setTask([...task,newTask])
    const res=await fetch('http://localhost:5000/tasks',{method:"POST",
     headers:{"Content-type":'application/json'}, 
     body:JSON.stringify(taskNew)});

     const data=await res.json()
     setTask([...task,data])

  }



  return (
    <>
      <div className='App container'> 
        
        
        <Header title={"Task Tracker"} onDisplay={()=>setShowForm(!showForm)} showForm={showForm} />
        {showForm && <AddTaskForm onAdd={addTask}/>}
        {/* Following will display a message if there's no task */}
        {task.length > 0 ? <Tasks task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : <p>No tasks to do</p>}
      </div>
    </>
  );
}

export default App;
