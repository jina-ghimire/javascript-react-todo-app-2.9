import './App.css';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import TaskLists from './components/TaskLists';
import './index.css';

function App() {
  const tasks = [
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
  ];
  return (
    
    <section className="todo-app">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className="main">
        <TaskLists tasks={tasks} />
        <Footer count={1} />
      </section>
    </section>
                
  );
}


export default App;
