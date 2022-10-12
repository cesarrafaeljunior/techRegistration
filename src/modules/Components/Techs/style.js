import styled from "styled-components";

export const SectionTechs = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;

  color: var(--grey0);

  max-width: 700px;

  .box__addTech {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    font-size: 23px;
    font-weight: 400;

    height: 32px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-height: 400px;

    overflow-y: auto;

    margin-top: 30px;
    padding: 22px 8px;

    background-color: var(--grey3);
    border-radius: 4px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey4);
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    h2 {
      font-size: 15px;
      color: var(--grey0);
    }
    p {
      font-size: 12px;
      color: var(--grey1);
    }
    .trash:hover {
      transition: all 0.3s;
      transform: scale(1.5);
    }
    &:hover {
      background-color: var(--grey2);
    }
  }
`;
