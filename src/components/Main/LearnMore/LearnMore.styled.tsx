import styled from "styled-components";

export const LearnMoreParagpraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: justify;
  color: #173d33;
`;
export const LearnMoreWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const DescriptionWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: 96px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 39px;
  width: 141px;
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
  border-radius: 500px;
  border: 1px solid #97d28b;
  cursor: pointer;
  padding: 4px 4px 4px 16px;
  &:hover {
    background-color: #173d33;
    p {
      color: #97d28b;
    }
  }
`;
export const ArrowContainer = styled.div`
  border-radius: 100px;
  background-color: #97d28b;
  padding: 8px;
  margin-left: auto;
`;
export const EmailAdressContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    max-width: 480px;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
    align-items: center;
  }
  margin-bottom: 36px;
  @media (max-width: 767px) {
    p + p {
      margin-top: 8px;
    }
  }
`;
export const EmailAdressWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    p:not(:last-child) {
      margin-right: 50px;
    }
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    display: flex;
    p:not(:last-child) {
      margin-right: 167px;
    }
  }
`;
export const TitleContainer = styled.div`
  width: 320px;
  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1280px) {
    width: 485px;
  }
`;
export const DescritpionContainer = styled.div`
  @media (min-width: 768px) {
    width: 342px;
  }
  @media (min-width: 1280px) {
    width: 363px;
  }
`;
export const LearnMoreImg = styled.img`
  max-width: 100%;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 43px;
  }
`;
export const LearnMoreDescriptionParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: justify;
  letter-spacing: -0.04em;
`;
