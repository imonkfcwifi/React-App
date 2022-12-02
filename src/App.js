import { useState, useEffect } from "react";

const Hello = () => {
  const destroyFc = () => {
    console.log("destroyed : - <");
  };
  const effectFc = () => {
    console.log("created : - >");
    return destroyFc;
  };
  useEffect(effectFc, []);
  return <h1>Hello</h1>;
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
// input 을 만들어 event listen을 하고 listen의 function이 작동할때 onChange = (event)<- argument로 event를 받는다
// event를 발생시킨 input의 target.value를 setKeyword에서 받아서 조작해서 keyword state에 넣어준다.  그 키워드를 value={keyword}로 사용하면
// 우리가 input을 조종 할 수 있다.
export default App;
