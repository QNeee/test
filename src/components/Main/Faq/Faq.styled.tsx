import styled from "styled-components";
import arrowDown from "../../../images/arrowDown.svg";
export const FaqLine = styled.div`
  width: 100%;
  height: 1px;
  @media (max-width: 767px) {
    margin-top: 24px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 24px;
  }
  background-color: #97d28b;
`;
export const TitleContainer = styled.div`
  width: 320px;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 347px;
    margin-right: 20px;
    order: 2;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    width: 398px;
    order: 2;
  }
`;
export const FaqWraper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const QuestionContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 28.8px;
  }
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
`;
export const AnswerContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
`;
export const FaqContainer = styled.ul`
  @media (max-width: 767px) {
    padding: 16px 0px 16px 0px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 342px;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    width: 596px;
    margin-right: auto;
  }
`;
export const FaqItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ItemContainer = styled.div`
  margin-left: 24px;
  position: relative;
`;
export const Icon = styled.img`
  position: absolute;
  top: 25px;
  left: -25px;
`;
export const DontFindContainer = styled.p`
  white-space: nowrap;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 28.8px;
  }
  text-align: center;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactUsButton = styled.button`
  cursor: pointer;
  border-radius: 500px;
  border: none;
  padding: 10px 16px 10px 16px;
  width: 130px;
  height: 39px;
  background-color: #97d28b;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    &:hover {
      background-color: #173d33;
      p {
        color: #97d28b;
      }
      div {
        background-image: url(${arrowDown});
        background-size: cover;
      }
    }
  }
`;
export const ContactUsParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  color: #173d33;
  letter-spacing: -0.04em;
`;
export const ArrowContainer = styled.div`
  width: 14px;
  height: 14px;
  background-color: #173d33;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DontFindWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 530px;
    margin-bottom: 100px;
    margin-right: 52px;
  }
  @media (min-width: 1280px) {
    margin-top: 490px;
    margin-bottom: 120px;
  }
`;
