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
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: var(--fontSize14);
    font-weight: var(--fontWeiRegular);
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
`;
