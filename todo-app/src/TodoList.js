import React, { useState, useEffect } from 'react';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo"
import { v4 as uuid} from 'uuid';

const getTodoLocal = ()=>{
  const todoList = localStorage.getItem("todo");
  if(todoList){
    return JSON.parse(localStorage.getItem("todo"))
  } else{
    return []
  }
}


function TodoList() {
    // const INITIAL_DATA = [
    //     {id: uuid(),
    //     todo: "Hello this is Bishnu Thapa"
    //     },
    //     {id: uuid(),
    //     todo: "Hello this is Yam Gurung"
    //     }
    // ]
    const [formData, setFormData] = useState(getTodoLocal());
    const [editTodos, setEditTodos] = useState(null);
        // console.log(editTodos, 'editTodos')
    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(formData))
    },[formData])

    function addOnForm(newData){
        setFormData(data=>([{id:uuid(), ...newData}, ...data]))
        setEditTodos(null)
    }

    function remove(id){
        setFormData(data=>data.filter(data=>data.id !== id))
      }

      function handleEditForm(updateTodo){
        setFormData((todo)=> todo.map(todo=>(todo.id === updateTodo.id ? updateTodo : todo)))
        setEditTodos(null)
      }

      function handleEdit(id){
        const todos = formData.find(data=> data.id === id)
        setEditTodos(todos)
      }

  return (
    <div>
        <NewTodoForm addOnForm={addOnForm} editForm={handleEditForm} editTodo = {editTodos}/>
        <h4 className='mt-4 text-start'>Todo Lists</h4>
        <hr className="mt-1 mb-1"/>
        {
            formData.map(data=>(<Todo key={data.id} handleEdit={handleEdit} remove={remove} data={data} id={data.id} />))
        }
    </div>
  )
}

export default TodoList