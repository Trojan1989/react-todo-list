import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

function App() {
  class App extends Component {
    state = {
      items:[],
      id: 0,
      item: '',
      editItem: false
    };

    handleChange = e => {
      this.setState({
        item: e.target.value
      });
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
