import React, {useContext} from "react";
import styled from "styled-components";
import {TodosContext} from "../TodosProvider";

const AddItem = () =>
{
    const {addTodo}= useContext(TodosContext);
    const [text, setText] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    const onSubmit = () => {
        if(text.trim())
        {
            addTodo({text});
            setText("");
        }
    }
    return(
    <AddItemForm>
    <AddItemInput placeholder={'Текст задачи'} onChange={event => {handleChange(event)}} value={text}/>
        <Button type={'button'} onClick={() => onSubmit()}>Добавить</Button>
    </AddItemForm>
    )
}

export default AddItem;

const AddItemForm = styled.form`
  box-sizing: border-box;
  border: 3px solid #000000;
  border-radius: 7px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 100px;
  width: 100%;
`
const AddItemInput = styled.input`
    padding: 8px 9px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: black;
`

const Button = styled.button`
  cursor: pointer;
  border-left: 3px solid #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  height: 100%;
  animation: ease-in-out;
  animation-duration: 11s;
  
  :hover
  {
    color: #009940;
  }
`