import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`

function App() {
  return (
    <Container className="App">
      <Header />
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
