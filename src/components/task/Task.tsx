import React, {useContext} from "react";
import DeleteIcon from '../../assets/deleteIcon.svg'
import {
    ITodo,
    TodosContext
} from "../../TodosProvider";
import {
    Checkbox,
    IconImg,
    TaskCard,
    TaskContent
} from './style'

const Task = (props: ITodo) => {
	const {text, completed} = props;
	const {removeTodo, CompleteTodo, incompleteTodo} = useContext(TodosContext)
	const onDelete = () => {
		removeTodo(props);
	}

	const onCheck = () => {
		completed ? incompleteTodo(props) : CompleteTodo(props);
	}
	return (
		<TaskCard>
			<TaskContent>
				<Checkbox type={"checkbox"} checked={completed} onChange={() => onCheck()}/>
				<p>{text}</p>
				{completed ? <IconImg src={DeleteIcon} onClick={() => onDelete()}/> : <></>}
			</TaskContent>
		</TaskCard>
	)
}


export default Task;