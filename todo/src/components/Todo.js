import React from 'react';
import { connect } from 'react-redux';
import { newTodo } from '../actions';
import { toggle } from '../actions';

class Todo extends React.Component {
    state = {
        newItem: '',
        isCompleted: false,
    }

    handleChanges = (e) => {
        e.preventDefault();
        this.setState({
            newItem: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newTodo(this.state.newItem);
        this.setState({ newItem: '' });
    }

    toggle = (e) => {
        e.preventDefault();
        this.props.toggle(e.target.id);
        console.log('toggled bitch')
    }

    render() {
        //console.log(this.state.newItem);
        console.log(this.props.toggle);
        //console.log(this.toggle)
        return (
            <div>
                {this.props.todo.map((todoArray) => {
                    console.log(todoArray.isCompleted);
                    return ( 
                        <h1 id={todoArray.id} onClick={this.toggle} key={todoArray.id}>{todoArray.text}<span>{todoArray.isCompleted.toString()}</span></h1>
                    )
                })}
                <div>
                    <h1>Please add an item</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="new item..."
                            name="todo"
                            value={this.state.newItem}
                            onChange={this.handleChanges}    
                        >
                        </input>
                        <button>Enter</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      ...state
    }
  }
  
export default connect(
    mapStateToProps, 
    { newTodo, toggle }
)(Todo);
  