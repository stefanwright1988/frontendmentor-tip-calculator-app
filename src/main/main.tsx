import React, { useEffect, useState } from "react";
import { ButtonGroup, TextInput } from "../inputs/inputs";
import { StyledButton } from "../inputs/inputs.styled";
import {
  Calculator,
  Container,
  Title,
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
  const [numberOfGuests, updateNumberOfGuests] = useState<number>(5);
  const [billAmount, updateBillAmount] = useState<number>(0);
  const [tipPercent, updateTipPercent] = useState<number>(5);
  const [stateTipAmount, updateStateTipAmount] = useState<string>("0");
  const [statePersonAmount, updateStatePersonAmount] = useState<number>(0);

  const updateTipAmount = () => {
    const retVal: string = (
      ((tipPercent / 100) * billAmount) /
      numberOfGuests
    ).toFixed(2);
    updateStateTipAmount(retVal);
  };

  useEffect(() => {
    updateTipAmount();
  }, [numberOfGuests, billAmount, tipPercent]);

  useEffect(() => {
    updateStatePersonAmount(billAmount / numberOfGuests + +stateTipAmount);
  }, [stateTipAmount]);

  return (
    <MainWrapper>
      <Title>SPLITTER</Title>
      <Container>
        <Calculator>
          <TextInput
            id="billAmount"
            labelText="Bill"
            type="text"
            defaultVal={billAmount}
            icon="icon-dollar.svg"
            onChange={(e) => {
              updateBillAmount(parseInt(e.target.value));
            }}
          />
          <ButtonGroup
            buttons={[5, 10, 15, 25, 50]}
            onMouseDownOrChange={updateTipPercent}
            selectedVal={tipPercent}
          />
          <TextInput
            id="numPeople"
            labelText="# Of People"
            type="text"
            defaultVal={numberOfGuests}
            icon="icon-person.svg"
            onChange={(e) => {
              updateNumberOfGuests(parseInt(e.target.value));
            }}
          />
        </Calculator>
        <Results>
          <TipAmount>
            <TipAmountLeft>
              <p>Tip Amount</p>
              <span>/ person</span>
            </TipAmountLeft>
            <TipAmountRight>${stateTipAmount}</TipAmountRight>
          </TipAmount>
          <TotalAmount>
            <TotalAmountLeft>
              <p>Total Amount</p>
              <span>/ person</span>
            </TotalAmountLeft>
            <TotalAmountRight>${statePersonAmount}</TotalAmountRight>
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
