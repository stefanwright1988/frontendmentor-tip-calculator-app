import React from "react";
import { ButtonGroup, TextInput } from "../inputs/inputs";
import { Calculator, Container, MainWrapper, Results } from "./main.styled";

const Main = () => {
  return (
    <MainWrapper>
      <Container>
        <Calculator>
          <TextInput labelText="Bill" type="text" defaultVal={0} />
          <ButtonGroup buttons={[5, 10, 15, 25, 50]} />
          <TextInput labelText="# Of People" type="text" defaultVal={5} />
        </Calculator>
        <Results></Results>
      </Container>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.stefan-wright.com">Stefan</a>.
      </div>
    </MainWrapper>
  );
};

export default Main;
