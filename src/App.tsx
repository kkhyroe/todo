import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { useStore } from "./store";
import TodoItem from "./components/TodoItem";
import BottomMenu from "./components/BottomMenu";
import { DisplayMode } from "./types";

const Container = styled.div`
  max-width: 600px;
  padding: 0 1em;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

function App() {
  const { store, addToStore, setStore, changeItemState } = useStore();
  const [displayList, setDisplayList] = useState(true);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("all");

  const itemsLeft = store.filter((item) => !item.checked).length;

  const onDisplayListClick = () => setDisplayList(!displayList);

  return (
    <Container className="App">
      <Header />
      <Wrapper>
        <Input
          addTodo={addToStore}
          displayState={displayList}
          onButtonClick={onDisplayListClick}
        />
        {displayList && (
          <>
            <TodoList>
              {store
                .filter((item) => {
                  switch (displayMode) {
                    case "active":
                      return !item.checked;
                    case "completed":
                      return item.checked;
                    default:
                      return true;
                  }
                })
                .map((item) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    changeItemState={changeItemState}
                  />
                ))}
            </TodoList>
            <BottomMenu
              itemsLeft={itemsLeft}
              changeMode={(value) => setDisplayMode(value)}
            />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default App;
