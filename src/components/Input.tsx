import styled from "styled-components";
import { useState } from "react";
import ExpandIcon from "../assets/expand_more.svg";

const Container = styled.div`
  display: flex;
  height: 3rem;
  padding: 0 0.5em;
  gap: 0.5em;
`;

const IconButton = styled.button<{ $active?: boolean }>`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.5em;
  height: fit-content;
  align-self: center;
  display: flex;
  transition: 500ms all;
  transform: ${(props) => (props.$active ? "rotate(-180deg)" : "none")};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const InputContainer = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: x-large;

  &::placeholder {
    font-style: italic;
  }
`;

const Input = ({
  addTodo,
  onDisplayStateChange,
  displayState,
}: {
  addTodo: (value: string) => void;
  onDisplayStateChange: (value?: boolean) => void;
  displayState: boolean;
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      <IconButton onClick={() => onDisplayStateChange()} $active={displayState}>
        <img src={ExpandIcon} alt="Dropdown Icon" />
      </IconButton>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) {
            addTodo(value);
            onDisplayStateChange(true);
            setValue("");
          }
        }}
      >
        <InputContainer
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default Input;
