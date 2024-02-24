import { ChangeEvent, FormEvent, useState } from "react";
import classes from "./ToDoForm.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../Store/toDoSlice";

function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const dispatch = useDispatch();

  const toDoFormHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(add(toDo));
    setToDo("");
  };

  const onChangeToDo = (event: ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  };

  return (
    <form className={classes["form-todo"]} onSubmit={toDoFormHandleSubmit}>
      <input
        type="text"
        placeholder="일정 작성해주세요. ex)강아지 산책"
        required
        value={toDo}
        onChange={onChangeToDo}
      />
      <button>추가</button>
    </form>
  );
}

export default ToDoForm;
