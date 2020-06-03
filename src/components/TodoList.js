// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div className = "list">
            {props.todos.map(task => (
                
                <Todo key={task.id} task = {task} toggleTask = {props.toggleTask}></Todo>
            ))}
        </div>
    )
}

export default TodoList;