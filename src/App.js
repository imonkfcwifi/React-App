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
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
        {/* <li key={0}>{item}</li> <li key={1}>{item}</li> <li key={2}>{item}</li> */}
      </ul>
    </div>
  );
}

export default App;
