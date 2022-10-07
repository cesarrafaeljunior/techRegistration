import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionLogin = styled.section`
  p {
    color: var(--grey0);
    font-weight: var(--fontWeiBold);
    text-align: center;
  }
  .boxLabel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 20px;

    font-size: var(--fontSize14);
    font-weight: var(--fontWeiRegular);
    .eye {
      position: absolute;
      top: 1.9em;
      right: 2em;
      width: 25px;
      height: 40px;
      cursor: pointer;
      color: var(--grey1);
    }
  }

  .boxButtons {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    gap: 20px;

    span {
      color: var(--grey1);

      font-weight: var(--fontWeiBold);
      font-size: 11px;

      margin-top: 18px;

      text-align: center;
    }
  }
  .errorMessage {
    color: var(--feedBackNegative);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

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
