import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";
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
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const TextInput = (props: inputProps) => {
  return (
    <>
      <StyledLabel htmlFor={props.id}>{props.labelText}</StyledLabel>
      <StyledInput
        id={props.id}
        type={props.type}
        defaultValue={props.defaultVal}
        icon={props.icon}
        onChange={props.onChange}
      />
    </>
  );
};

interface buttonGroupProps {
  buttons: Array<number>;
  onMouseDownOrChange: Dispatch<SetStateAction<number>>;
  selectedVal: number;
}

const ButtonGroup = (props: buttonGroupProps) => {
  return (
    <StyledButtonGroup>
      <StyledButtonGroupLabel>Select Tip %</StyledButtonGroupLabel>
      {props.buttons.map((button, index) => (
        <Button
          buttonText={button}
          state={button === props.selectedVal ? "active" : "inactive"}
          onMouseDown={props.onMouseDownOrChange}
        />
      ))}
      <StyledInputAsButton
        type="text"
        placeholder="Custom"
        onChange={(e) =>
          props.onMouseDownOrChange(
            e.target.value === "" ? 0 : parseFloat(e.target.value)
          )
        }
      />
    </StyledButtonGroup>
  );
};

interface buttonProps {
  buttonText: number;
  state: "active" | "inactive";
  onMouseDown: Dispatch<SetStateAction<number>>;
}

const Button = (props: buttonProps) => {
  return (
    <StyledButton
      state={props.state}
      onMouseDown={() => props.onMouseDown(props.buttonText)}
    >
      {props.buttonText}%
    </StyledButton>
  );
};

export { TextInput, Button, ButtonGroup };
