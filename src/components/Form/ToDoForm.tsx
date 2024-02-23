import classes from "./ToDoForm.module.css";

function ToDoForm({ toDoFormHandleSubmit, toDo, onChangeToDo }: any) {
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
