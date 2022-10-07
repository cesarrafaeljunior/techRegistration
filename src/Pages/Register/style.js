import styled from "styled-components";

export const SectionRegister = styled.section`
  padding: 50px 0;
  header {
    padding: 0 3px;
    margin-bottom: 30px;

    width: 100%;
    max-width: 369px;

    justify-content: space-between;
  }
  main {
    height: 100%;
  }
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
  span {
    color: var(--grey1);

    font-size: var(--fontSize12);

    text-align: center;
  }
  form {
    max-height: none;

    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .errorMessage {
    color: var(--feedBackNegative);
  }
`;
