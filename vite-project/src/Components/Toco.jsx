import styles from "./toco.module.css";
export default function Toco({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("deleted was clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const uff= item.done?styles.completed :"";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={uff} onClick={() => handleClick(item.name)}>{item.name}</span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}