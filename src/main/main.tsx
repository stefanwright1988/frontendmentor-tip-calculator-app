import React from "react";
import { ButtonGroup, TextInput } from "../inputs/inputs";
import { StyledButton } from "../inputs/inputs.styled";
import {
  Calculator,
  Container,
  MainWrapper,
  ResetButton,
  Results,
  TipAmount,
  TipAmountLeft,
  TipAmountRight,
  TotalAmount,
  TotalAmountLeft,
  TotalAmountRight,
} from "./main.styled";

const Main = () => {
  return (
    <MainWrapper>
      <Container>
        <Calculator>
          <TextInput
            labelText="Bill"
            type="text"
            defaultVal={0}
            icon="icon-dollar.svg"
          />
          <ButtonGroup buttons={[5, 10, 15, 25, 50]} />
          <TextInput
            labelText="# Of People"
            type="text"
            defaultVal={5}
            icon="icon-person.svg"
          />
        </Calculator>
        <Results>
          <TipAmount>
            <TipAmountLeft>
              <p>Tip Amount</p>
              <span>/ person</span>
            </TipAmountLeft>
            <TipAmountRight>$123.00</TipAmountRight>
          </TipAmount>
          <TotalAmount>
            <TotalAmountLeft>
              <p>Total Amount</p>
              <span>/ person</span>
            </TotalAmountLeft>
            <TotalAmountRight>$123.00</TotalAmountRight>
          </TotalAmount>
          <ResetButton>
            <StyledButton state="active">Reset</StyledButton>
          </ResetButton>
        </Results>
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
