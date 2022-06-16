import React, {useContext} from "react";
import styled from "styled-components";
import DeleteIcon from '../Images/delete.svg'
import {ITodo, TodosContext} from "../TodosProvider";
const Task = (props:ITodo) =>
{
    const {text, completed} = props;
    const {removeTodo, CompleteTodo, incompleteTodo} = useContext(TodosContext)
    const onDelete = () => {
        removeTodo(props);
    }

    const  onCheck = () => {
        completed ? incompleteTodo(props) : CompleteTodo(props);
    }
    return(
        <TaskCard>
            <TaskContent>
                <Checkbox type={"checkbox"} checked={completed} onChange={() => onCheck()}/>
                <p>{text}</p>
                {completed ? <DeleteIconImg src={DeleteIcon} onClick={() => onDelete()}/> : <></>}
            </TaskContent>
        </TaskCard>
    )
}

const TaskCard = styled.div`
  background: #FCFCFC;
  border: 1px solid #000000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`


const TaskContent = styled.div`
  align-items: center;
  justify-items: center;
    margin: 6px;
  display: grid;
  grid-template-columns: 32px 8fr 56px;
  grid-gap: 1em;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  min-height: 32px;
  color: #000000;
  
  p{
    justify-self: start;
  }
`

const DeleteIconImg = styled.img`
height: 24px;
  width: 24px;
`

const Checkbox = styled.input`
all: revert;
height: 16px;
width: 16px;
`


export default Task;