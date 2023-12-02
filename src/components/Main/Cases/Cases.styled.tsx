import styled from "styled-components";

export const ButtonWrapper = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) and (max-width: 1279px) {
    align-items: flex-end;
  }
  @media (min-width: 1280px) {
    align-items: flex-end;
  }
`;
export const ImgsContainer = styled.div`
  display: flex;
  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 15px;
  }
  gap: 48px;
`;
export const NumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: auto;
  @media (min-width: 1280px) {
    position: relative;
    right: 100%;
  }
`;
export const InteractiveContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    margin-top: 24px;
    justify-content: space-between;
    margin-bottom: 26px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 48.98%;
    justify-content: space-between;
    padding-left: 9px;
  }
  @media (min-width: 1280px) {
    padding-left: 161px;
    justify-content: space-between;
  }
`;
export const Button = styled.button<{ flag?: string }>`
  border-radius: 100px;
  border: ${(props) => (props.flag ? "none" : "1px solid #173d33")};
  padding: ${(props) => (props.flag ? "16px" : "15px")};
  background-color: ${(props) => (props.flag ? "#97D28B" : "transparent")};
  cursor: pointer;
  &:hover {
    border-color: #97d28b;
    background-color: ${(props) => props.flag && "#173D33"};
    svg {
      path {
        stroke: #97d28b;
      }
    }
  }
`;

export const NumbersParagraph = styled.p<{ primary?: string }>`
  font-family: "Fira Sans", sans-serif;
  font-weight: ${(props) => (props.primary ? 300 : 400)};
  font-size: 28px;
  line-height: 33.6px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  opacity: ${(props) => props.primary && 0.25};
`;
export const NameParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  max-width: 175px;
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    line-height: 24px;
    max-width: 194px;
  }
  @media (min-width: 1280px) {
    max-width: 261px;
    font-size: 24px;
    line-height: 28.8px;
  }
`;
export const DescParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 16.8px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
  color: #173d33;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 27px;
  height: 66px;
`;
export const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
`;
export const CasesLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
  margin-top: 21px;
  margin-bottom: 12px;
`;
export const TitleContainer = styled.div`
  width: 264px;
  @media (min-width: 1280px) {
    width: 398px;
  }
`;
export const Line = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-left: 120px;
    height: 65px;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    height: 96px;
  }
  width: 1px;
  background-color: #97d28b;
`;
export const Wrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    margin-bottom: 38px;
  }
  @media (min-width: 1280px) {
    display: flex;
    margin-bottom: 120px;
  }
`;
export const ItemContainer = styled.div`
  img:nth-child(1) {
    margin-right: 48px;
  }
`;
