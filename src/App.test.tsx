import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const addItem = (value: string) => {
  fireEvent.change(screen.getByTestId("input"), {
    target: { value: value },
  });
  fireEvent.submit(screen.getByTestId("form"));
};

const checkItem = (index?: number) =>
  fireEvent.click(screen.getAllByTestId("checkbox")[index || 0]);

test("submits form with new Todo", () => {
  render(<App />);
  addItem("Test text1");
  expect(screen.getByText("Test text1")).toBeInTheDocument();
});

test("changes tabs", () => {
  render(<App />);
  addItem("Testing1");
  addItem("Testing2");
  checkItem();

  fireEvent.click(screen.getByTestId("active"));
  screen
    .getAllByTestId("checkbox")
    .map((item) => expect(item).not.toBeChecked());

  fireEvent.click(screen.getByTestId("completed"));
  screen.getAllByTestId("checkbox").map((item) => expect(item).toBeChecked());
});

test("clears tabs", () => {
  render(<App />);
  addItem("Testing1");
  addItem("Testing2");
  checkItem();

  fireEvent.click(screen.getByTestId("clear"));
  screen
    .getAllByTestId("checkbox")
    .map((item) => expect(item).not.toBeChecked());
});
