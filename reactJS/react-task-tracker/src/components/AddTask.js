const AddTask = () => {
    const [Text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState('')
    
    return (

    <form className='add-form'>
     <div className='form-control'>
        <label>Tasks</label>
        <input type='text' placeholder='Add Task' />
     </div> 
     <div className='form-control'>
        <label>Day and Time</label>
        <input type='text' placeholder='Day and Time' />
     </div>
     <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' placeholder='Add Task' />
     </div>
     <input type='submit' placeholder='Save Task' 
     className='btn btn-block'/>
    </form>
  )
}

export default AddTask
