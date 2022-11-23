import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #D73035;
  height: 198px;
  padding: 0 24px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;

  .page-details {
    h1{
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
