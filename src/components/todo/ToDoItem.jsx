import { Card, ListGroupItem, Button, Row, Col } from "react-bootstrap"
import { UncontrolledCollapse } from "reactstrap"

const ToDoItem = ({ todo, remove, mark }) => {
    return(
        <ListGroupItem>
            <Row>
                <Col className="col-md-7">
                    <span color='primary' className="d-flex mb-3" id={`toggler${todo.id}`}>
                        {todo.isComplete ? <p><del>{todo.title}</del></p>:<p>{todo.title}</p>}
                    </span>
                    <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
                        <Card>
                            <Card.Body>
                                {todo.description}
                            </Card.Body>
                        </Card>
                    </UncontrolledCollapse>
                </Col>
                <Col className="col-md-5">
                    <Button color='danger' onClick={()=>{remove(todo.id)}} style={{marginRight: "10px"}}>pasalinti</Button>
                    <Button color='danger' onClick={()=>{mark(todo.id)}} style={{marginRight: "10px"}}>uzbaigti</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default ToDoItem