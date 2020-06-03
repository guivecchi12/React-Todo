import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './components/Todo.css';


const todos = [
  {task: "Enter First Task",
  id: 1,
  completed: false}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos
    };
  }

  addTodo = (e, newTask) =>{
    e.preventDefault();
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTask = id =>{
    this.setState({
      todos: this.state.todos.map(task => {
        if (id === task.id){
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    })
  }

  render() {
    return (
      <div> 
        <div>
          <h2>Welcome to your Todo App!</h2>
          <h4>Add your Todo's</h4>
          <TodoForm addTodo = {this.addTodo}></TodoForm>
        </div>
        <TodoList 
          todos = {this.state.todos}
          toggleTask = {this.toggleTask} />
      </div>
    );
  }
}

export default App;
