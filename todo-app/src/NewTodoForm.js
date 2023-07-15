import React, {useState, useEffect} from 'react'

function NewTodoForm({addOnForm, editForm, editTodo}) {
const INITIAL_STATE = editTodo || {
  todo: ""
}
const [formData, setFormData] = useState(INITIAL_STATE);

useEffect(()=>{
  setFormData(editTodo || {todo: ""})
},[editTodo])


const handleSubmit = (e)=>{
  e.preventDefault();
  if(editTodo){
    editForm({...formData})
  } else{
    addOnForm({...formData})
  }
  setFormData({todo: ""})
}
const handleInput = (e)=>{
  const {name, value} = e.target;
  setFormData(data=>({...data, 
    [name]: value
  }))
}


  return (
    <form onSubmit={handleSubmit} className='d-flex gap-2'>
      <div style={{width: "90%"}}>
          <label htmlFor='todo' className='form-label'></label>
          <input id='todo' onChange={handleInput} name="todo" value={formData.todo} className='form-control' type="text" placeholder='Task..' />
      </div>
      <div className='mt-4'>
      <button type="submit" className='btn btn-warning'>{editTodo ? "Update" : "Create"}</button>
      </div>
    </form>
  )
}

export default NewTodoForm