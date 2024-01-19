import { Button, ButtonGroup } from "react-bootstrap"
import { filterTodo } from "../../store/actions/TodoActions"
import { connect } from "react-redux"

const Nav = (props) => {

    const {filterTodo} = props;

    return(
        <ButtonGroup style={ {marginLeft:'156px'} }>
            <Button color='primary' onClick={()=>{filterTodo('VISOS')}}>Visos uzduotys</Button>
            <Button color='danger' onClick={()=>{filterTodo('AKTYVIOS')}}>Aktyvios uzduotys</Button>
            <Button color='warning' onClick={()=>{filterTodo('PABAIGTOS')}}>Uzbaiktos uzduotys</Button>
        </ButtonGroup>
    )
}

export default connect(null, {filterTodo})(Nav)