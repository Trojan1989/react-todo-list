import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

function App() {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center">Todo Input</h3>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
