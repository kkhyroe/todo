import styled from "styled-components";
import React from "react";
import { DisplayMode } from "../types";
import ModeChanger from "./ModeChanger";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0 0.5em;
  height: 3rem;
  align-items: center;

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
      <ModeChanger changeMode={changeMode} />
      <div>
        <Button data-testid="clear" onClick={clearCompleted}>
          Clear completed
        </Button>
      </div>
    </Container>
  );
};

export default BottomMenu;
