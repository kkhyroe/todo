import styled from "styled-components";
import { PropsWithChildren } from "react";

const List = styled.ul`
  margin: 0;
  padding: 0;

  & > li {
    border-bottom: 1px solid lightgrey;
  }
`;

const TodoList = ({ children }: PropsWithChildren) => {
  return <List>{children}</List>;
};

export default TodoList;
