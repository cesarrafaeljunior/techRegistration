import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  z-index: 1;

  background: rgb(18, 18, 20, 30%);
  animation: openModal 0.3s;

  .Modal {
    width: 90%;
    max-width: 300px;
    background-color: var(--grey3);
    border-radius: 5px;
  }
  .bodyModal {
    width: 100%;
    form {
      min-width: 100%;
      height: 100%;
      padding: 15px 17px;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    button {
      font-size: 16px;
      height: 48px;
    }
    .box__label {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    select {
      color: var(--grey0);
    }
  }

  @keyframes openModal {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
