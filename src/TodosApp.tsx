import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Card from './Components/Card';
import AddItem from "./Components/AddItem";
import TaskStatusSelector from "./Components/TaskStatusSelector";
import Task from "./Components/Task";
import TodosProvider, {ITodo, TodosContext} from "./TodosProvider";

const TodosApp = () => {
    const {selectedFilter, getTodos, getActiveTodos, getCompletedTodos} = useContext(TodosContext);
    const [filteredTodos, setFilteredTodos] = React.useState<ITodo[]>([]);
    useEffect(() => {
        const todosWithFilter = selectedFilter === 'all' ? getTodos() : selectedFilter === 'active' ? getActiveTodos() : getCompletedTodos();
        setFilteredTodos(todosWithFilter);
    }, [selectedFilter, getTodos]);
    return (
        <TodosWrapper>
            <Card>
                <TodosCardContent>
                    <Logo>туду</Logo>
                    <AddItem/>
                    <TaskStatusSelector/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
                        {filteredTodos.map((todo: ITodo) => <Task key={todo.id}  completed={todo.completed} text={todo.text} id={todo.id}/>)}
                    </div>
                </TodosCardContent>
            </Card>
        </TodosWrapper>
    )
}

const TodosWrapper = styled.div`
  margin: 3em auto;
  max-width: 550px;
  width: 100%;
`

const TodosCardContent = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Logo = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  color: #009940;
`


export default TodosApp;
