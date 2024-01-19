import ToDoItem from "./ToDoItem"
import { connect } from "react-redux"
import { markDone, deleteTodo, filterTodo } from "../../store/actions/TodoActions"
import filterTodos from "../../utilities/filterTodos"
import { ListGroup } from "react-bootstrap"

const ToDoList = (props) => {

    let{todos, markDone, status, deleteTodo} = props;

    if(todos.length === 0) return <p>nera ivestu uzduociu</p>;

    let filterTodoList = filterTodos(todos, status)
    
    console.log('jjjj', filterTodoList)
    console.log(props)
    return(
        <ListGroup>
            {filterTodoList.map(todo=>
                <ToDoItem
                todo={todo}
                key={todo.id}
                mark={markDone}
                remove={deleteTodo}
                />)}
        </ListGroup>
    )
}

const mapDispatchToProps = state =>({
    todos:state.todos.todos,
    status:state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo})(ToDoList)