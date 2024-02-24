import { useDispatch, useSelector } from "react-redux";
import classes from "./List.module.css";
import { remove } from "../../Store/toDoSlice";

function List() {
  const { toDoList } = useSelector((state: any) => state.toDo);
  const dispatch = useDispatch();

  const onClickDeleteTodo = (startIndex: number) => {
    dispatch(remove(startIndex));
  };

  return (
    <>
      {toDoList.length !== 0 ? (
        <ul className={classes.list}>
          {toDoList.map((toDo: string, index: number) => (
            <li key={index} className={classes["list-item"]}>
              <span>
                {index + 1}. {toDo}
              </span>
              <button onClick={() => onClickDeleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>오늘 일정 채워주세요</p>
      )}
    </>
  );
}

export default List;
