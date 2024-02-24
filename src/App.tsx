import List from "./components/List/List";
import classes from "./App.module.css";
import ToDoForm from "./components/Form/ToDoForm";

function App() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>투두 리스트</h1>
      <main>
        <ToDoForm />
        <List />
      </main>
    </div>
  );
}

export default App;
