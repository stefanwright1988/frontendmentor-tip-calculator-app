import React from "react";
import {
  StyledButton,
  StyledButtonGroup,
  StyledButtonGroupLabel,
  StyledInput,
  StyledInputAsButton,
  StyledLabel,
} from "./inputs.styled";

interface inputProps {
  beforeText?: string;
  labelText: string;
  type: "text" | "number";
  defaultVal: number | string;
  icon?: string;
}
const TextInput = (props: inputProps) => {
  return (
    <>
      <StyledLabel>{props.labelText}</StyledLabel>
      <StyledInput
        type={props.type}
        defaultValue={props.defaultVal}
        icon={props.icon}
      />
    </>
  );
};

interface buttonGroupProps {
  buttons: Array<number>;
}

const ButtonGroup = (props: buttonGroupProps) => {
  return (
    <StyledButtonGroup>
      <StyledButtonGroupLabel>Select Tip %</StyledButtonGroupLabel>
      {props.buttons.map((button, index) => (
        <Button
          buttonText={`${button}%`}
          state={index === 0 ? "active" : "inactive"}
        />
      ))}
      <StyledInputAsButton type="text" placeholder="Custom" />
    </StyledButtonGroup>
  );
};

interface buttonProps {
  buttonText: string;
  state: "active" | "inactive";
}

const Button = (props: buttonProps) => {
  return <StyledButton state={props.state}>{props.buttonText}</StyledButton>;
};

export { TextInput, Button, ButtonGroup };
