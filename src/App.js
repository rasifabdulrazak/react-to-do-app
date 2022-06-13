import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import {  Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <Container className='' style={{alignItems:'center'}}>
    <Row className="" >
      <Col >
        <div className="wrappere shadow-ld">
          <div className="card radius shadowDepth1 shadow-lg p-5" style={{backgroundColor:' #243447 ',borderRadius:'5px'}}>
            <div className="card__content card__padding ">
    <div className="todo-app">
     <TodoList />
    </div>

    </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
  );
}

export default App;
