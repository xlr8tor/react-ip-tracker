import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
  top: 87px;

  .leaflet-container {
    width: inherit;
    height: 100vh;
    z-index: -1;
  }
`;
