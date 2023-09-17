import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoItemProps } from "../types";
import { ReactNode } from "react";

const List = styled.ul`
  margin: 0;
  padding: 0;

  & > li:not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
`;

const TodoList = ({ children }: { children: ReactNode }) => {
  return <List>{children}</List>;
};

export default TodoList;
