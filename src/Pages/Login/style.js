import styled from "styled-components";

export const SectionLogin = styled.section`
  p {
    color: var(--grey0);
    font-weight: var(--fontWeiBold);
    text-align: center;
  }
  .boxLabel {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 20px;

    font-size: var(--fontSize14);
    font-weight: var(--fontWeiRegular);
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

      text-align: center;
    }
  }
`;
