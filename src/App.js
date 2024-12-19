import './App.css';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskLists from './components/TaskLists';
import './index.css';
import React, { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([
    {
      description: 'Completed task',
      created: new Date(Date.now() - 17000), // 17 seconds ago
      completed: true,
      editing: false,
    },
    {
      description: 'Editing task',
      created: new Date(Date.now() - 300000), // 5 minutes ago
      completed: false,
      editing: true,
    },
    {
      description: 'Active task',
      created: new Date(Date.now() - 300000), // 5 minutes ago
      completed: false,
      editing: false,
    },
  ]);
  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const startEditingTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, editing: true } : task
      )
    );
  };

  const saveTaskDescription = (index, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, description: newDescription, editing: false } : task
      )
    );
  };

  return (
    
    <section className="todo-app">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className="main">
        <TaskLists tasks={tasks}
          onToggleCompletion={toggleTaskCompletion}
          onDelete={deleteTask}
          onStartEditing={startEditingTask}
          onSaveDescription={saveTaskDescription} />
        <Footer count={tasks.filter((task) => !task.completed).length}/>
      </section>
    </section>
                
  );
}


export default App;
