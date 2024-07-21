import React from 'react'
import Toco from "./Toco";
import styles from "./todolist.module.css";

function Todolist({todos,setTodos}) {
  const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
        {sortedTodos.map((item) =>(
        <Toco key={item.name} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default Todolist