import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value })
    };

    submitTask = e =>{
        e.preventDefault();
        {this.props.addTodo( e, this.state.task )};
    }

    render(){
        return(
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value = {this.state.task}
                    name = "task"
                    onChange = {this.handleChanges}
                />
                <button className = "add">Add</button>
                <button className = "clear" onClick = {this.props.clearCompleted}>Clear Completed</button>

            </form>
        )
    }
}

export default TodoForm;