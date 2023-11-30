import styled from "styled-components";

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 244px;
`;
export const ContactUsItemContainer = styled.div`
  margin-top: 24px;
`;
export const ContactUsContainerInItem = styled.div`
  margin-top: 8px;
  display: flex;
  svg {
    margin-right: 8px;
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
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
`;
export const IconsContainer = styled.div`
  padding: 12px;
`;
export const SocialNetworkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 24px;
  ${IconsContainer}:not(:last-child) {
    margin-right: 8px;
  }
`;
