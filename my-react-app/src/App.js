// the App is the main component and the way you embed another component into the main component is by using tags
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from 'uuid'


class App extends Component {
  state = {
    todos: 
    [
      {
        id: uuid.v4(), 
        title: "Looking up at the statistics on farming",
        completed: true
      },
      {
        id: uuid.v4(), 
        title: "Learning React as a front-end Library",
        completed: false
      },
      {
        id: uuid.v4(), 
        title: "Learning how python can be the backend to a react based frontend",
        completed: false
      }                   
    ] 
  }
  // Toggle Completed 
  markComplete = (id) => {
    this.setState({ todos:this.state.todos.map(todo =>{
      if(todo.id ===id){
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }
  // Delete Todo usinhg the spread operator to filter
  delTodo= (id) =>{
    this.setState({ todos:[...this.state.todos.filter(todo =>todo.id!== id)]

    })
  }
  //  Add Todo
  addTodo = (title) =>{
    // this is what is going to be added as it is the variable newTodo
    const newTodo = {
      id: uuid.v4(),
      // we do this since in ES6 if they are identical we dont have to keep repeating ourselves
      title,
      completed: false

    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render(){
    // this is ultimately for testing using the react developer tools
    // console.log(this.state.todos)
    return (
      // this is JSX
      // in this we have to render two components so the best way to do this is to use the Route that we have imported from the ReactBrowser
      // the exact part helps to prevent overlapping between the pages
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path ="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo ={this.addTodo} />
                <Todos todos= {this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>

              )}/>
            <Route path ="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
       // embedding a component into the main app component by using a tag
      // different components can have their own states but we have have a state that is going to be used by different components
      // in the below example the todos are passed as props in the todos component