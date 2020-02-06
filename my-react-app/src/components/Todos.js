// this is going to be a class based component just like App.js
import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';



class Todos extends React.Component {
	// checking whether you have captured the state props from main App.js
	// console.log(this.props.todos)
   // this is just for testing
   // markComplete = () => {
   // 	console.log('Hello')
   // }
  render() {
    // console.log(this.props.todos)
    // when mapping we create a list and each list should have its own unique id thus we give the id by using todo id
    return this.props.todos.map((todo)=>(
    	<TodoItem key={todo.id} todo={todo} markComplete= {this.props.markComplete} delTodo={this.props.delTodo}/>
    	));
  }
}

// this defining of prop types is because it is a good practise 
Todos.propTypes = {
	todos:PropTypes.array.isRequired
}
export default Todos;