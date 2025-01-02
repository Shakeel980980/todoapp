import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todoapp(){
    let [todo, settodo]=useState([{task: "sample task", id: uuidv4()}]);
    let [newtodo, setnewtodo]=useState([""]);

    let addnewTodo=()=>{
        settodo((previous)=>{
            return [...previous, {task: newtodo, id: uuidv4()}]
        });
        setnewtodo("");
    }
    let updateTodovalue=(event)=>{
        setnewtodo(event.target.value);
    }

    let deleteTodoitem =(id)=>{
           settodo (todo.filter((todo)=> todo.id !=id)) 
    }

    let toUpperCaseAll = ()=>{
        settodo((previous)=>
            previous.map((todo)=>{
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            })
        ); 
    };

    let upperCaseOne=(id)=>{
        settodo((previous)=>
        previous.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
            }else{
                return todo;
            }
        })
        )

    }
    return(
        <div>
            <input type="text" placeholder="Write Items...." 
            value={newtodo}
            onChange={updateTodovalue}
            />
            <button onClick={addnewTodo}>ADD</button>
            <br />
            <hr />
            <h3>Todo Task</h3>
            <ul>
                {todo.map((todos)=>(
                    <li key={todos.id}>
                        {todos.task}
                    <button onClick={()=> deleteTodoitem(todos.id)} >Delete</button>
                    <button onClick={()=> upperCaseOne(todos.id)}>upperOnlyThis</button>
                        </li>
                ))}
            </ul>
            <hr />
            <p>Click to Convert All Task into Uppercase</p>
            <button onClick={()=>toUpperCaseAll()}>Convert</button>
        </div>
    )
}