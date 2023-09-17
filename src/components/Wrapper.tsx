import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.main`
  background-color: white;
  border: 1px solid lightgrey;

  & > div:not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
`;

const Wrapper = ({ children }: { children?: ReactNode }) => (
  <Container>{children}</Container>
);

export default Wrapper;
