import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => `${width}`};
  height: 48px;

  background-color: ${({ backgroundcolor }) => `var(--${backgroundcolor})`};

  border: solid 2px ${({ bordercolor }) => `var(--${bordercolor})`};

  border-radius: 3px;

  color: var(--white);

  font-size: var(--fontSize14);
  font-weight: 600;

  &:hover {
    background-color: ${({ hover }) => `var(--${hover})`};
    border: solid 2px ${({ hover }) => `var(--${hover})`};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 0 13px;

  background-color: var(--grey2);

  color: var(--grey0);

  border: solid 1px var(--grey2);
  border-radius: 4px;

  font-size: var(--fontSize14);

  &:focus {
    border: solid 2px var(--grey0);
    outline: none;
  }
`;

const Label = styled.label`
  color: var(--grey0);
`;

const TextArea = styled(Input)`
  width: 100%;
  height: 40px;

  padding: 10px 13px;

  background-color: var(--grey2);

  color: var(--grey0);

  border: solid 1px var(--grey2);
  border-radius: 4px;

  font-size: var(--fontSize14);

  resize: none;
  &:focus {
    border: solid 2px var(--grey0);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 40px;

  padding: 10px 13px;

  background-color: var(--grey2);

  color: var(--grey1);

  border: solid 1px var(--grey2);
  border-radius: 4px;

  font-size: var(--fontSize14);

  resize: none;
  &:focus {
    border: solid 2px var(--grey0);
    outline: none;
  }
`;

export { Button, Input, Label, TextArea, Select };
