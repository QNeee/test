import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-bottom: 24px;
`;
export const FooterLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #97d28b;
  margin-bottom: 24px;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ArrowUpContainer = styled.div`
  border-radius: 100px;
  padding: 8px;
  background-color: #97d28b;
`;
export const SocialMediaContainer = styled.div`
  width: 56px;
  height: 24px;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
export const InfoParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  letter-spacing: -0.04em;
`;
export const InfoContainer = styled.div`
  text-align: center;
  ${InfoParagraph}:not(:last-child) {
    margin-bottom: 16px;
  }
`;
