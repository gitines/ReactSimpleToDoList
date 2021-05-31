import React from 'react';

const ToDoList = () => (
    <React.Fragment>
    <h1 className="m-3">My To Do List</h1>
          
    <ul className="list-group m-3">

      <li className="list-group-item">Wake Up</li>
      <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      <li className="list-group-item">Take a shower</li>
      <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
      <li className="list-group-item">Coffee</li>
      <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>

    </ul>
    </React.Fragment>
)

export default ToDoList