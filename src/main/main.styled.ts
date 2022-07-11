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
  background-color: ${(props) => props.theme.palette.darkGrayishCyan};
  display: flex;
  flex-direction: column;
`;

export { Container, MainWrapper, Calculator, Results };
