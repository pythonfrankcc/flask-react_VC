// this will be a class based component
import React, { Component } from 'react';


class AddTodo extends Component{
	state={
		title:''
	}
	onSubmit = (e) => {
		// just like vanilla JS its going to try to submit to the default file and the way to prevent this is through the below
		e.preventDefault();
		// this represents what we are changing
		this.props.addTodo(this.state.title);
		// this sets the state back to nothing on submitting
		this.setState({title: ''});
	}
	// using the e.target.value means you are setting the title to whatever you type in and as long as the e.target.name is equivalent to whatever you are targetting just in the case that you have many input values
	onChange = (e) => this.setState({[e.target.name]: e.target.value});
	render(){
		return(
			<form onSubmit ={ this.onSubmit } style={{ display:'flex' }}>
			<input
				type ="text"
				name="title"
				style={{ flex: '10', padding: '5px' }}
				placeholder="Add Todo ..." 
				value={this.state.title}
				onChange={this.onChange}
				/>
			<input
				type="submit"
				value="Submit"
				className="btn"
				style={{ flex: '1' }}
				/>
			</form>
		)
	}
}
export default AddTodo