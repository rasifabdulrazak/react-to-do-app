import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Todo from './Todo';
import SweetAlert from "react-bootstrap-sweetalert";

const TodoList = () => {
    const [todos,setTodos] = useState([])
    const [confirm, setConfirm] = useState(false);
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
        setConfirm("Todo deleted successfully")

    }

    const updateTodo = (todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue:item)))
        setConfirm("Todo updated successfully")
    }

    const completeTodo = id =>{
        let updatesTodos = todos.map(todo =>{
            if (todo.id ===id){
                todo.isComplete = !todo.isComplete
            }
            return todo

        })
        setTodos(updatesTodos);
    }
  return (
    <Container>
        <Row>
        <div>
        <h1 className='text-center' style={{color:'whitesmoke'}}>Add your Plans Here</h1>
        </div>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </Row>
        {confirm && <SweetAlert
    success
    title="Done!"
    show={confirm}
    onConfirm={() => setConfirm(false)}
  >
   {confirm}
  </SweetAlert>}
    </Container>
   
   
  )
}

export default TodoList