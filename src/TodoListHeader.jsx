import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.newTaskTitleRef = React.createRef();
    // }

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.state.title = '';
        if (newTitle.trim() === "") {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
        }
        this.props.addTask(newTitle);
    }
    onAddTaskKeyPress = (e) => {
        if(e.key === "Enter") {
            this.onAddTaskClick();
        }
    }
    onAddTitleChanged = (e) =>{
        this.setState({
            title: e.currentTarget.value,
            error: false
        })
    }
    state = {
        error: "",
        title: "",
    }

    render = () => {
        let errorClass = this.state.error ? "error" : "";
        return (
                     <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input
                            onChange={this.onAddTitleChanged}
                               className={errorClass}
                               // ref={this.newTaskTitleRef}
                               type="text"
                               placeholder="Введите значение"
                               onKeyPress={this.onAddTaskKeyPress}
                               value={this.state.title}
                        />
                        <button   onClick={this.onAddTaskClick} >Add</button>
                    </div>
                </div>

    )
    }
}

export default TodoListHeader;