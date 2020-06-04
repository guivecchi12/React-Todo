import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './components/Todo.css';


const todos = [{
  task: "Make a todo-list",
  id: Date.now(),
  completed: false
}];

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
    if(newTask !== ""){
      const newTodo = {
        task: newTask,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };
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

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    });
  }; 

  render() {
    return (
      <div className = "body"> 
        <div className = "page">
          <h2>Welcome to your Todo App!</h2>
          <h4>Add your Todo's</h4>
          <TodoForm 
            addTodo = {this.addTodo}
            clearCompleted = {this.clearCompleted}
          />
          <TodoList 
            todos = {this.state.todos}
            toggleTask = {this.toggleTask} 
          />
        </div>
        
      </div>
    );
  }
}

export default App;
