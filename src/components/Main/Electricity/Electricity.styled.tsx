import styled from "styled-components";

export const KWHContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  margin-top: 96px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 135px;
  }
`;
export const KWHNumbers = styled.div`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  line-height: 48px;
  font-weight: 700;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    font-size: 100px;
    line-height: 100px;
  }
  color: #173d33;
  text-transform: uppercase;
  color: #97d28b;
`;
export const TitleContainer = styled.div`
  width: 286px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 368px;
  }
`;

export const KWHTitleContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 24px;
  }
`;
