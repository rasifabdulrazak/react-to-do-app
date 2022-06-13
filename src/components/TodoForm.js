import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "./style.css";

const TodoForm = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onhandleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  return (
    <Form onSubmit={onhandleSubmit} className="todo-form">
      {props.edit ? (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "whitesmoke" }}>Update Todo</Form.Label>
          <div className="d-flex mx-2">
            <Form.Control
              style={{ height: "3rem" }}
              type="text"
              placeholder="Update your todo here"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
              required
             
            />
            <Button type="submit" className="todo-button edit" variant="primary">
              Update
            </Button>
          </div>
        </Form.Group>
      ) : (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "whitesmoke" }}>Add Todo</Form.Label>
          <div className="d-flex mx-2">
            <Form.Control
              style={{ height: "3rem" }}
              type="text"
              placeholder="Add todo here"
              value={input}
              name="edittext"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
              required
             
            />
            <Button type="submit" className="todo-button" variant="success">
              Add
            </Button>
          </div>
        </Form.Group>
      )}
  
      
    </Form>
  );
};

export default TodoForm;
