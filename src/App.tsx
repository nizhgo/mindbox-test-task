import React from "react";
import TodosApp from "./TodosApp";
import TodosProvider from "./TodosProvider";


export const App = () => {
	return (
		<TodosProvider>
			<TodosApp/>
		</TodosProvider>
	);
}