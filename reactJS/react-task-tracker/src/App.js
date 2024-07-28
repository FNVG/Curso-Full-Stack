import React from 'react'
import Header from './components/Header.js'
import Tasks  from './components/Tasks.js';
import { useState } from "react"
import AddTask from './components/AddTask.js';


function App() {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    }
  ]   
  )

  const name = 'Brad';
 
 const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
 } 

 //alternar reminder
const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title='Tast Tracker'/>
      <AddTask />
      {tasks.length > 0 ? 
      <Tasks 
        tasks= {tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

// class App extends React.Component {
  //  render() {
   //   return <h1>Hello from a class</h1> 
   // }
 //}
export default App;
