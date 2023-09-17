import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoItemProps } from "../types";

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const TodoList = ({ store }: { store: TodoItemProps[] }) => {
  return (
    <List>
      {store.map((item) => (
        <TodoItem text={item.text} />
      ))}
    </List>
  );
};

export default TodoList;
