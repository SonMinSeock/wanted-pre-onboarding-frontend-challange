import { useState } from "react";
import List from "./components/List/List";
import classes from "./App.module.css";
import ToDoForm from "./components/Form/ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./Store/toDoSlice";

function App() {
  const dispatch = useDispatch();
  const { toDoList } = useSelector((state: any) => state.toDo);
  const [toDo, setToDo] = useState("");

  const toDoFormHandleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(add(toDo));
    setToDo("");
  };

  const onChangeToDo = (event: any) => {
    setToDo(event.target.value);
  };

  const onClickDeleteTodo = (startIndex: any) => {
    dispatch(remove(startIndex));
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>투두 리스트</h1>
      <main>
        <ToDoForm toDoFormHandleSubmit={toDoFormHandleSubmit} toDo={toDo} onChangeToDo={onChangeToDo} />
        {toDoList.length !== 0 ? (
          <ul className={classes.list}>
            {toDoList.map((toDo: any, index: any) => (
              <List key={index} toDo={toDo} onClickDeleteTodo={onClickDeleteTodo} startIndex={index} />
            ))}
          </ul>
        ) : (
          <p>오늘 일정 채워주세요</p>
        )}
      </main>
    </div>
  );
}

export default App;
