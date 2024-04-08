import styled from "styled-components";

interface BorderProps {
  border: string;
}

export const CardPlanos = styled.div<BorderProps>`
  width: 240px;
  height: 320px;
  padding: 24px;
  border: ${(props) => props.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
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
    width: 180px;
    padding: 15px;
  }
  h1 {
    color: rgb(18, 42, 87);
    font-size: 1.5rem;
    font-weight: 550;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 15px;
  }
  hr {
    order: none;
    width: 100%;
    height: 4px;
    background-color: rgb(18, 42, 87);
    margin-bottom: 15px;
  }
  ul {
    margin: 4px 0px;
  }
  li {
    font-size: 0.9rem;
    list-style-type: square;
    list-style-position: inside;
    color: black;
  }
  ::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;
