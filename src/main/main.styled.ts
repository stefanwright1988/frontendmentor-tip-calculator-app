import styled from "styled-components";

const MainWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-width: 60%;
  width: 60%;
  min-height: 50%;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 20px;
`;

const Calculator = styled.div`
  width: calc(50% - 20px);
`;

const Results = styled.div`
  width: calc(50% - 20px);
  border-radius: 20px;
  margin-left: 40px;
  background-color: ${(props) => props.theme.palette.veryDarkCyan};
  display: flex;
  flex-direction: column;
`;

const TipAmount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const TipAmountLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 14px;
  > p {
    color: ${(props) => props.theme.palette.white};
    line-height: 20px;
  }
  > span {
    color: ${(props) => props.theme.palette.grayishCyan};
    line-height: 20px;
  }
`;

const TipAmountRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 38px;
  color: ${(props) => props.theme.palette.strongCyan};
`;

const TotalAmount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TotalAmountLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 14px;
  > p {
    color: ${(props) => props.theme.palette.white};
    line-height: 20px;
  }
  > span {
    color: ${(props) => props.theme.palette.grayishCyan};
    line-height: 20px;
  }
`;

const TotalAmountRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 38px;
  color: ${(props) => props.theme.palette.strongCyan};
`;

const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-direction: row;
  flex: 1;
  padding-bottom: 1rem;
  > span {
    max-width: calc(100% - 4rem);
    flex: 1;
  }
`;

export {
  Container,
  MainWrapper,
  Calculator,
  Results,
  TipAmount,
  TipAmountLeft,
  TipAmountRight,
  TotalAmount,
  TotalAmountLeft,
  TotalAmountRight,
  ResetButton,
};
