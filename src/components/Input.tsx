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
  position: relative;
`;

const InputContainer = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: x-large;
  background: transparent;
  z-index: 2;

  &::placeholder {
    font-style: italic;
  }
`;

const Kbd = styled.kbd`
  position: absolute;
  right: 0;
  z-index: 1;
  align-self: center;

  opacity: 0.3;

  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  color: #333;
  font-size: 0.85em;
  font-weight: 700;
  padding: 2px 4px;
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
        data-testid="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) {
            addTodo(value);
            onDisplayStateChange(true);
            setValue("");
          }
        }}
      >
        <Kbd>Enter</Kbd>
        <InputContainer
          data-testid="input"
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default Input;
