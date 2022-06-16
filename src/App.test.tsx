import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from "./App";


test('todos add button renders', () => {
    render(<App />);
    const linkElement = screen.getByText(/Добавить/i);
    expect(linkElement).toBeInTheDocument();
});

test('todos add button click', () => {
    render(<App />);
    const linkElement = screen.getByText(/Добавить/i);
    linkElement.click();
    expect(screen.getByText(/Добавить/i)).toBeInTheDocument();
});

test('input renders', () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/Текст задачи/i);
    expect(linkElement).toBeInTheDocument();
});

test('input change', () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/Текст задачи/i) as HTMLInputElement;
    linkElement.value = 'mindbox';
    linkElement.dispatchEvent(new Event('input'));
    expect(screen.getByPlaceholderText(/Текст задачи/i)).toHaveValue('mindbox');
});

test('filter renders', () => {
    render(<App />);
    const linkElement = screen.getByText(/Активные/i);
    expect(linkElement).toBeInTheDocument();
});


