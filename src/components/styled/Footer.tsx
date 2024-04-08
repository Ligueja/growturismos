import styled from "styled-components";

export const Footer = styled.div`
  background-color: rgb(18, 42, 87);
  height: 70px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    max-width: 992px;
    min-width: 320px;
    margin: auto;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    width: 992px;
  }

  p {
    font-size: 0.9rem;
  }
`;
