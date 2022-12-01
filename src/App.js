import Button from "./Button";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>hi!</h1>
      <Button text={"I'm just a button..."} />
    </div>
  );
}

export default App;
