import { DisplayMode } from "../types";
import React from "react";
import styled from "styled-components";

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

const ModeChanger = ({
  changeMode,
}: {
  changeMode: (value: DisplayMode) => void;
}) => (
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
);

export default ModeChanger;
