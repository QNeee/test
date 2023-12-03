import styled from "styled-components";

export const MainContainer = styled.main<{ menu: string }>`
  @media (max-width: 767px) {
    margin-top: 146px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 164px;
  }
  @media (min-width: 1280px) {
    margin-top: 200px;
  }
  /* filter: ${({ menu }) => (menu === "true" ? "blur(1px)" : "none")}; */
`;
