import React from 'react';


class TodoListTask extends React.Component {
    deleteTitle = () =>{
        debugger
        this.props.deleteTitle(this.props.task.id)
    }
    state = {
        editMode: false
    }
    onIsDoneChange = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onIsTitleChange = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }

    render = () => {
        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className="todoList-tasks">
                <div className={taskClass}>
                    <input type="checkbox"
                           checked={this.props.task.isDone}
                           onChange={this.onIsDoneChange}
                    />
                    {this.state.editMode
                        ? <input onChange={this.onIsTitleChange} onBlur={this.deActivateEditMode} autoFocus={true}
                                 value={this.props.task.title}/>
                        : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                    }, priority: {this.props.task.priority} <button onClick={this.deleteTitle}>X</button>
                </div>
            </div>

        );
    }
}

export default TodoListTask;