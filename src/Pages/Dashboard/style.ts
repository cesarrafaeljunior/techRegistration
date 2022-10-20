import styled from "styled-components";

export const SectionDashboard = styled.section`
  header {
    width: 100%;
    margin: 0 auto;

    max-width: 700px;
    justify-content: space-between;
  }
  main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    .Box__User {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 12px;
      gap: 10px;
      width: 100%;

      border-top: solid 1px var(--grey1);
      border-bottom: solid 1px var(--grey1);

      color: var(--white);
      span {
        font-size: var(--fontSize14);
        color: var(--grey1);
      }
      @media (min-width: 440px) {
        align-items: center;
      }
      @media (min-width: 700px) {
        flex-direction: row;
        justify-content: center;
        gap: 18em;
      }
    }
  }
`;
