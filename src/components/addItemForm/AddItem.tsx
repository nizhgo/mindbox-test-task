import React, {useContext} from "react";
import {TodosContext} from "../../TodosProvider";
import {
    AddItemForm,
    Button,
    Input
} from './style'

const AddItem = () => {
	const {addTodo} = useContext(TodosContext);
	const [text, setText] = React.useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
	const onSubmit = () => {
		if (text.trim()) {
			addTodo({text});
			setText("");
		}
	}
	return (
		<AddItemForm>
			<Input placeholder={'Текст задачи'} onChange={event => {
				handleChange(event)
			}} value={text}/>
			<Button type={'button'} onClick={() => onSubmit()}>Добавить</Button>
		</AddItemForm>
	)
}

export default AddItem;

