import React, {Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			background : '#f4f4f4',
			padding : '10px',
			borderBottom : '1px #ccc dotted',
			textDecoration: this.props.todo.completed ?
			'line-through' : 'none',
		}
	}
	// when calling the method like this you use an e for event and since it is an  external method you have to bind it
	markComplete = (e) => {
		console.log(this.props)
	}
	render(){
		const {id,title } = this.props.todo;
		return(
			// the color here is light grey
			// <div style = {itemStyle}> this is when you are using variables
			<div style = { this.getStyle() }>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{''}
				    {title}
				    <button onClick={this.props.delTodo.bind(this,id)} style= {btnStyle}>x</button>
				</p>
			</div>
		)
	}
}


// this defining of prop types is because it is a good practise 
TodoItem.propTypes = {
	todo:PropTypes.object.isRequired
}
const btnStyle = {
	background:'#ff0000',
	color:'#fff',
	border:'none',
	padding:'5px 9px',
	borderRadius:'50%',
	cursor:'pointer',
	float:'right',
}

// const itemStyle = {
// 	 backgroundColor: '#f4f4f4' 
// }
export default TodoItem