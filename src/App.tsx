import React from 'react';
import './App.css';
import Header from "./components/Header";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";

const Container = styled.div`
  max-width: 500px;
  padding: 0 1rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-flow: column;
`

function App() {
  return (
    <Container className="App">
      <Header />
      <Wrapper></Wrapper>
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
