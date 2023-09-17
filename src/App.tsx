import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { useStore } from "./store";
import TodoItem from "./components/TodoItem";

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
          <TodoList>
            {store.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                changeItemState={changeItemState}
              />
            ))}
          </TodoList>
        )}
      </Wrapper>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </Container>
  );
}

export default App;
