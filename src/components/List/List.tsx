import classes from "./List.module.css";

function List({ toDo, onClickDeleteTodo, startIndex }: any) {
  return (
    <li className={classes["list-item"]}>
      <span>
        {startIndex + 1}. {toDo}
      </span>
      <button onClick={() => onClickDeleteTodo(startIndex)}>삭제</button>
    </li>
  );
}

export default List;
