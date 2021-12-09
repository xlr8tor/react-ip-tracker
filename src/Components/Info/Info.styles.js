import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  padding: 1.5em 1em;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  max-width: 1100px;
  padding: 1.5em;
  margin: 0 auto;
  border-radius: 15px;
  z-index: 4;

  @media (min-width: 768px) {
    flex-flow: row;
    padding: 2em;

    section {
      width: 25%;
      text-align: start;

      p {
        font-size: 1.4em;
      }

      h3 {
        font-size: 14px;
      }
    }

    section + section {
      border-left: 1px solid var(--Dark-Gray);
      padding: 1.5em;
    }
  }
`;

export const Section = styled.section`
  text-align: center;
  width: 100%;

  h3 {
    font-size: 10px;
    color: var(--Dark-Gray);
    padding-block-end: 0.7em;
  }

  p {
    font-size: 1em;
    font-weight: 500;
  }

  .bottom {
    padding-block-end: 1em;
  }

  & + & {
    padding: 0;

    @media (min-width: 425px) {
      padding: 0 1.5em;
    }
  }

  @media (min-width: 425px) and (max-width: 768px) {
    p {
      font-size: 1.3rem;
    }
  }
`;
