import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import {RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit} from 'react-icons/ti'
import TodoForm from "./TodoForm";
import { ArrowRight } from "react-bootstrap-icons";


const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {
  const Colors = [
    "#EC7063 ",
    "#A569BD ",
    "#5DADE2",
    "#45B39D ",
    "#F5B041 ",
    "#F4F6F7",
  ];
  var color = -1;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitupdate = value =>{
    updateTodo(edit.id,value);
    setEdit({
        id:null,
        value:''
    })
  }
  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitupdate} />
  }
 
  return (
    <Container>
      <Row className="text-center">
      { todos.map((todo,index)=>{
          if (color == 5) color = -1;
          color += 1;
          return(
            <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index} > <div className="shadow-lg mt-4 p-3" style={{ backgroundColor: Colors[color],display:'flex',justifyContent:'space-between',borderRadius:'5px' }}>
       
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            <h3>{todo.text}</h3>
        </div>
        <div className='icons'>
        <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete-icon' style={{fontSize:'3rem'}}/>

        <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon' style={{fontSize:'3rem'}}/>
        </div>

        </div>
        
        </div>

          )
      })}
      </Row>
    </Container>
  );
};

export default Todo;
