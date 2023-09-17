import styled from "styled-components";

const Item = styled.li`
  font-size: 2em;
  list-style-type: none;
`;

const TodoItem = ({ text }: { text?: string }) => {
  return <Item>{text}</Item>;
};

export default TodoItem;
