import React from 'react';
import { connect } from 'react-redux';
import { myAction } from '../actions';

class Todo extends React.Component {
    state = {
        todos: []
    }

    render() {
        console.log(props);
        return (
            <div>
                <h1>Please add an item</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="new item...">
                    </input>
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      textOnProps: state.todos
    }
  }
  
export default connect(
    mapStateToProps, 
    { myAction }
)(Todo);
  