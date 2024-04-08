import styled from "styled-components";

interface BorderProps {
  border: string;
}

export const CardServicos = styled.div<BorderProps>`
  width: 240px;
  height: 320px;
  padding: 24px;
  border: ${(props) => props.border};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
  }
  img {
    width: 100%;
  }
  h2 {
    color: rgb(18, 42, 87);
    font-size: 1.1rem;
    font-weight: 550;
  }
  button {
    background-color: transparent;
    color: rgb(18, 42, 87);
    font-weight: 600;
    border-radius: 40px;
    border: 2px solid rgb(18, 42, 87);
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    width: 150px;
    padding: 10px;
  }
`;
