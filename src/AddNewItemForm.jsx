import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {

    state = {
        error: "",
        title: "",
    }
    onAddItemClick = () => {
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

        this.props.addItem(newTitle);

    }
    onAddItemKeyPress = (e) => {
        if(e.key === "Enter") {
            this.onAddItemClick();
        }
    }
    onAddTitleChanged = (e) =>{
        this.setState({
            title: e.currentTarget.value,
            error: false
        })
    }

    render = () => {
        let errorClass = this.state.error ? "error" : "";
        return (


                    <div className="todoList-newTaskForm">
                        <input
                            onChange={this.onAddTitleChanged}
                               className={errorClass}
                               type="text"
                               placeholder="Введите значение"
                               onKeyPress={this.onAddItemKeyPress}
                               value={this.state.title}
                        />
                        <button   onClick={this.onAddItemClick}>Add</button>
                    </div>


    )
    }
}

export default AddNewItemForm;