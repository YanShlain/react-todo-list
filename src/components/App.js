
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // eslint-disable-next-line
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Todo item #1", completed: false },
    { id: 2, title: "Todo item #2", completed: false }
  ])

  return (
    <TodoList todoList={todoList} />
  );
}

export default App;
