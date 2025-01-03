import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './todoapp.css'

export default function Todoapp() {
  let [todo, settodo] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newtodo, setnewtodo] = useState([""]);

  let addnewTodo = () => {
    settodo((previous) => {
      return [...previous, { task: newtodo, id: uuidv4(), isDone: false }];
    });
    setnewtodo("");
  };
  let updateTodovalue = (event) => {
    setnewtodo(event.target.value);
  };

  let deleteTodoitem = (id) => {
    settodo(todo.filter((todo) => todo.id != id));
  };

  let toUpperCaseAll = () => {
    settodo((previous) =>
      previous.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  let toMarkAll = () => {
    settodo((previous) =>
      previous.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };
  let upperCaseOne = (id) => {
    settodo((previous) =>
      previous.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markDone = (id) => {
    settodo((previous) =>
      previous.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="ulitems">
      <input
        type="text"
        placeholder="Write Items...."
        value={newtodo}
        onChange={updateTodovalue}
      />
      &nbsp; &nbsp;&nbsp;&nbsp;
      <button onClick={addnewTodo}>ADD</button>
      <br />
      <hr />
      <h3>Todo Task</h3>
      <ul className="ulitems">
        {todo.map((todos) => (
          <li key={todos.id}>
            <span
              style={todos.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todos.task}
            </span>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodoitem(todos.id)}>Delete</button>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todos.id)}>
              upperOnlyThis
            </button>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <button onClick={() => markDone(todos.id)}>markDone</button>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <p>Click to Convert All Task into Uppercase</p>
      <button onClick={() => toUpperCaseAll()}>Convert</button>
      &nbsp; &nbsp;&nbsp;&nbsp;
      <button onClick={() => toMarkAll()}>toMarkAll</button>
    </div>
  );
}
