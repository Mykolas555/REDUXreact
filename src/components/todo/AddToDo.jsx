import { useState } from "react"
import { Button, Modal, Form, FormGroup } from "react-bootstrap"
import { connect } from "react-redux"
import { addTodo } from "../../store/actions/TodoActions"

const AddToDo = (props) => {

    const [modal, setModal] = useState(false);

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e)=> {
        setTask(
            {
                ...task,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let id =parseInt(Date.now())
        const todo ={
            ...task,
            isComplete:false,
            id:id
        }
        props.addTodo(todo)
        setModal(false)
    }

    return(
        <div>
            <Button onClick={()=>{setModal(true)}} variant="warning" style={{marginTop:'-65px'}}>nauja uzduotis</Button>
            <Modal show={modal} onHide={()=>{setModal(false)}}>
                <Modal.Header>sukurti nauja uzduoti</Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <FormGroup>
                            <Form.Label>pavadinimas</Form.Label>
                            <Form.Control type="text" onChange={handleChange} required value={task.title} name="title"></Form.Control>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>aprasymas</Form.Label>
                            <Form.Control type="text" onChange={handleChange} required value={task.description} name="description"></Form.Control>
                        </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{setModal(false)}}>uzdaryti</Button>
                    <Button type="submit">saugoti</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default connect(null, {addTodo})(AddToDo)