import styled from "styled-components";

export const ButtonWrapper = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) {
    margin-left: 155px;
  }
`;
export const ImgsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const NumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const InteractiveContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
  @media (min-width: 768px) {
    border-left: 1px solid #97d28b;
    padding-left: 9px;
    display: flex;
    margin-left: 120px;
    /* margin-right: auto; */
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
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    max-width: 194px;
  }
`;
export const DescParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16.8px;
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
  @media (min-width: 768px) {
    /* margin-right: auto; */
  }
`;
export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 38px;
    /* justify-content: space-between; */
  }
`;
export const ItemContainer = styled.div`
  img:nth-child(1) {
    margin-right: 15px;
  }
`;
