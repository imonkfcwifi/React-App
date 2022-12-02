import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE FIRST API....");
  }, []);
  useEffect(() => {
    console.log("COUNT CHANGES");
  }, [counter]);
  useEffect(() => {
    console.log("COUNT && KEYWORD CHANGES");
  }, [counter, keyword]);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("FIND THE KEYWORD", keyword);
    }
  }, [keyword]);
  // typing 할때마다 API를 새로 호출하는데 . . .
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
// input 을 만들어 event listen을 하고 listen의 function이 작동할때 onChange = (event)<- argument로 event를 받는다
// event를 발생시킨 input의 target.value를 setKeyword에서 받아서 조작해서 keyword state에 넣어준다.  그 키워드를 value={keyword}로 사용하면
// 우리가 input을 조종 할 수 있다.
export default App;
