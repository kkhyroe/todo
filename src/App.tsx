import React, { useState } from "react";
import styled from "styled-components";
import { useStore } from "./store";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Input from "./components/Input";
import { DisplayMode } from "./types";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import BottomMenu from "./components/BottomMenu";

const Container = styled.div`
  max-width: 600px;
  padding: 0 1em;
  margin: 0 auto;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column;
`;

function App() {
  const { store, addToStore, clearCompleted, changeItemState } = useStore();
  const [displayList, setDisplayList] = useState(true);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("all");

  const itemsLeft = store.filter((item) => !item.checked).length;

  const onDisplayListClick = (value?: boolean) =>
    setDisplayList(value || !displayList);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Input
          addTodo={addToStore}
          displayState={displayList}
          onDisplayStateChange={onDisplayListClick}
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
                .map((item, index) => (
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
              clearCompleted={clearCompleted}
            />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default App;
