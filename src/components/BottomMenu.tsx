import styled from "styled-components";
import React from "react";
import { DisplayMode } from "../types";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0 0.5em;
  height: 3rem;
  align-items: center;
  border-top: 1px solid lightgrey;

  @media (max-width: 600px) {
    padding: 0.5em;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    height: fit-content;
  }

  & > div:first-child {
    text-align: start;
  }

  & > div:last-child {
    text-align: end;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 500ms all;
  height: 2rem;

  &:hover {
    background-color: linen;
  }
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 0.5rem;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  border-radius: 2px;
  transition: 500ms all;
  height: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background-color: linen;
  }

  &:has(input:checked) {
    border: 1px solid bisque;
  }
`;

const BottomMenu = ({
  itemsLeft,
  changeMode,
  clearCompleted,
}: {
  itemsLeft: number;
  changeMode: (value: DisplayMode) => void;
  clearCompleted: () => void;
}) => {
  return (
    <Container>
      <div>
        <span>
          {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
        </span>
      </div>
      <InputsContainer>
        <Label>
          <Input
            name="mode"
            type="radio"
            value="all"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>All</span>
        </Label>
        <Label data-testid="active">
          <Input
            name="mode"
            type="radio"
            value="active"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>Active</span>
        </Label>
        <Label data-testid="completed">
          <Input
            name="mode"
            type="radio"
            value="completed"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>Completed</span>
        </Label>
      </InputsContainer>
      <div>
        <Button data-testid="clear" onClick={clearCompleted}>
          Clear completed
        </Button>
      </div>
    </Container>
  );
};

export default BottomMenu;
