import { Col, Row, Container } from "react-bootstrap";
import Nav from "../nav/Nav";
import ToDoList from "../todo/ToDoList";
import AddToDo from "../todo/AddToDo";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <Nav/>
            <AddToDo/>
            <ToDoList/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
