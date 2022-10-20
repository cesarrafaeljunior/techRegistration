import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  background-color: var(--grey2);

  border-radius: 5px 5px 0 0;

  p {
    font-size: 13px;
    font-weight: var(--fontWeiBold);
    color: var(--grey0);
  }
  button {
    font-size: 20px;
    font-weight: 700;
    color: var(--grey1);
  }
  .closeBtn {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
