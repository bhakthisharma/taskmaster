import React from "react";
import "./index.css";

const App = () => {
  return (
      <div className="container">
        <div className="title">
          <h1>Task Master</h1>
        </div>
        <div className="input-item">
          <input type="text" placeholder="add item..." />
        </div>
        <div className="button-add">
          <button>ADD</button>
        </div>
        <div className="items">
          <div className="lists">
            <div>
              <p>task1</p>
            </div>
            <div className="operations">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
          <div className="lists">
            <div>
              <p>task1</p>
            </div>
            <div className="operations">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
          <div className="lists">
            <div>
              <p>task1</p>
            </div>
            <div className="operations">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
