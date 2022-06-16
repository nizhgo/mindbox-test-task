import React from "react";
import TodosProvider from "./TodosProvider";
import TodosApp from "./TodosApp";


export const App = () => {
    return (
        <TodosProvider>
            <TodosApp />
        </TodosProvider>
    );
}