import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 24px 0;
`;

interface IStyledButton {
  state: string;
}
const StyledButton = styled.span<IStyledButton>`
  background-color: ${(props) =>
    props.state === "active"
      ? props.theme.palette.strongCyan
      : props.theme.palette.veryDarkCyan};
  font-size: ${(props) => props.theme.inputFontSize};
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  padding: 10px 12px;
  margin: 10px 0;
  border-radius: 5px;
  flex: 0 25%;
  color: ${(props) => props.theme.palette.white};
  text-align: center;
`;

const StyledInputAsButton = styled.input`
  background-color: ${(props) => props.theme.palette.lightGrayishCyan};
  font-size: ${(props) => props.theme.inputFontSize};
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  padding: 10px 12px;
  margin: 10px 0;
  flex: 0 25%;
  width: 25%;
  border: 0px;
  text-align: right;
`;

const StyledLabel = styled.label`
  width: 100%;
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: ${(props) => props.theme.inputFontSize};
  background-color: ${(props) => props.theme.palette.lightGrayishCyan};
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  border: 0;
  text-align: right;
`;

export {
  StyledButton,
  StyledButtonGroup,
  StyledInputAsButton,
  StyledInput,
  StyledLabel,
};
