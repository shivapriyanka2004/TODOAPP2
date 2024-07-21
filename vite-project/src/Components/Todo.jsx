import { useState } from "react";
import Footer from "./Footer"
import Form from "./Form";
import Todolist from "./Todolist";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos=todos.filter((todo)=>todo.done).length;
  const totalTodos = todos.length
  return (
    <div>
      <Form  todos={todos} setTodos={setTodos}/>
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer com={completedTodos} total={totalTodos}/>
      
    </div>
  );
}
