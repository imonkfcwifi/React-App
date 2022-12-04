import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setTodos((currenArray) => [toDo, ...currenArray]);
    setTodo("");
    // todos.pust <- NEVER
  };
  console.log(toDos);
  return (
    <div>
      <h1>오늘 할 일 {toDos.length} 개</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="Text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      {/* form은 submit 이벤트가 있음 */}
    </div>
  );
}

export default App;
