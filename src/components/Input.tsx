import styled from "styled-components";
import { useState } from "react";
import ExpandIcon from "../assets/expand_more.svg";

const Container = styled.div`
  display: flex;
`;

const IconButton = styled.button<{ $active?: boolean }>`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1em;
  display: flex;
  transition: 500ms all;
  transform: ${(props) => (props.$active ? "rotate(-180deg)" : "none")};
`;

const Input = ({
  addTodo,
  onButtonClick,
  displayState,
}: {
  addTodo: (value: string) => void;
  onButtonClick: () => void;
  displayState: boolean;
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      <IconButton onClick={onButtonClick} $active={displayState}>
        <img src={ExpandIcon} alt="Dropdown Icon" />
      </IconButton>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
        }}
      >
        <input
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default Input;
