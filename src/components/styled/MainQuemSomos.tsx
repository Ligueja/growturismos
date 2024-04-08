import styled from "styled-components";

export const MainQuemSomos = styled.div`
  display: flex;
  max-width: 992px;
  min-width: 320px;
  margin: auto;
  height: calc(-190px + 100vh);
  align-items: center;
  justify-content: space-around;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-height: 200px;
  }
  h1 {
    margin-bottom: 10px;
    color: rgb(18, 42, 87);
    font-size: 2.9rem;
    font-weight: 550;
  }
  p {
    font-size: 1.2rem;
    color: black;
  }
  img {
    width: 90%;
  }
`;
