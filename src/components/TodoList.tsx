import {ReactNode} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = styled.ul`
  margin: 0
`

const TodoList = () => {
  return <List><TodoItem/></List>
}

export default TodoList