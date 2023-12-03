import styled from "styled-components";

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 244px;
  @media (min-width: 1280px) {
    width: 466px;
  }
`;
export const ContactUsWrapper = styled.div`
  @media (max-width: 767px) {
    margin-top: 24px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    display: flex;
    margin-top: 120px;
  }
`;
export const ContactUsItemContainer = styled.div`
  &:not(:last-child) {
    @media (max-width: 1279px) {
      margin-bottom: 24px;
    }
    @media (min-width: 1280px) {
      margin-bottom: 32px;
    }
  }
`;
export const ContactUsContainerInItem = styled.div`
  @media (max-width: 1279px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    margin-top: 16px;
  }
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  &:hover {
    svg {
      path {
        stroke: #97d28b;
      }
    }
  }
`;
export const ContactUsTitle = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
`;
export const ContactUsParagraph = styled.p`
  a {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    color: #173d33;
    letter-spacing: -0.04em;
  }
`;
export const IconsContainer = styled.div`
  @media (max-width: 1279px) {
    padding: 12px;
  }
`;
export const SocialNetworkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1279px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    margin-top: 16px;
  }
  ${IconsContainer}:not(:last-child) {
    margin-right: 8px;
  }
  margin-bottom: 24px;
`;
