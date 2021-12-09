import styled from "styled-components";
import arrow from "./../../images/icon-arrow.svg";

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 1em;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  input {
    width: inherit;
    outline: none;
    border: none;
    height: 55px;
    padding: 0 60px 0 25px;
    border-radius: 12px;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  background: var(--Very-Dark-Gray);
  color: #fff;
  border: none;
  height: 55px;
  width: 60px;
  right: 0;
  cursor: pointer;
  border-radius: 0 12px 12px 0;

  ::before {
    content: url(${arrow});
  }
  :hover {
    background: hsl(0, 0%, 25%);
  }
`;
