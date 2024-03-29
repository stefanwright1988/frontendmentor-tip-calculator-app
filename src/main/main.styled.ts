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

const Title = styled.h1`
  margin-bottom: 1.8rem;
  font-size: 1.8rem;
  letter-spacing: 1rem;
  max-width: 10rem;
  overflow-wrap: anywhere;
  line-height: 2.5rem;
  color: ${(props) => props.theme.palette.veryDarkCyan};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50%;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  border-radius: 20px;
  margin: 5% 0;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 60%;
    min-width: 60%;
  }
`;

const Calculator = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const Results = styled.div`
  width: 90%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.palette.veryDarkCyan};
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }
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
  Title,
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
