import React, {useEffect} from "react";

export interface ITodo {
	id: string;
	text: string;
	completed: boolean;
}

interface IAddTodo {
	text: string;
}

export const TodosContext = React.createContext<any | null>(null);

const TodosProvider = ({children}: { children: React.ReactNode }) => {
	const [todos, setTodos] = React.useState<ITodo[]>([]);
	const [selectedFilter, setSelectedFilter] = React.useState<'all' | 'complete' | 'active'>("all");
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos") || "[]");
		setTodos(todos);
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const getTodos = () => todos;

	const addTodo = (todo: IAddTodo) => {
		setTodos([...todos, {id: Date().toString(), text: todo.text, completed: false}]);
	}

	const removeTodo = (todo: ITodo) => {
		setTodos(todos.filter(t => t.id !== todo.id));
	}

	const CompleteTodo = (todo: ITodo) => {
		setTodos(todos.map(t => (t.id === todo.id ? {...t, completed: !t.completed} : t)));
	}

	const incompleteTodo = (todo: ITodo) => {
		setTodos(todos.map(t => (t.id === todo.id ? {...t, completed: false} : t)));
	}


	const getCompletedTodos = () => todos.filter(t => t.completed);

	const getActiveTodos = () => todos.filter(t => !t.completed);

	return (
		<TodosContext.Provider value={{
			getTodos,
			addTodo,
			removeTodo,
			CompleteTodo,
			getCompletedTodos,
			getActiveTodos,
			incompleteTodo,
			selectedFilter,
			setSelectedFilter,
		}}>
			{children}
		</TodosContext.Provider>
	)
}

export default TodosProvider;