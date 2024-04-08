import styled from "styled-components";

export const MainHome = styled.div`
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
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    color: black;
  }
  button {
    background-color: rgb(18, 42, 87);
    color: white;
    font-weight: 600;
    border-radius: 40px;
    border: 2px solid rgb(18, 42, 87);
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    width: 200px;
    padding: 20px;
  }
  img {
    width: 90%;
  }
`;
