import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Learn about Hooks',
      isCompleted: true
    }, 
    {
      text: 'I think hooks are important',
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  )


}

export default App;