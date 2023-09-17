import styled from "styled-components";
import React from "react";
import { DisplayMode } from "../types";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  //padding: 0.5em;
  border-top: 1px solid lightgrey;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const BottomMenu = ({
  itemsLeft,
  changeMode,
}: {
  itemsLeft: number;
  changeMode: (value: DisplayMode) => void;
}) => {
  return (
    <Container>
      <div>
        {!!itemsLeft && (
          <span>
            {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
          </span>
        )}
      </div>
      <div>
        <Label>
          <Input
            name="mode"
            type="radio"
            value="all"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>All</span>
        </Label>
        <Label>
          <Input
            name="mode"
            type="radio"
            value="active"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>Active</span>
        </Label>
        <Label>
          <Input
            name="mode"
            type="radio"
            value="completed"
            onChange={(e) => changeMode(e.target.value as DisplayMode)}
          />
          <span>Completed</span>
        </Label>
      </div>
      <div>
        <Button>Clear completed</Button>
      </div>
    </Container>
  );
};

export default BottomMenu;
