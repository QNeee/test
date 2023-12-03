import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-bottom: 24px;
`;
export const FooterLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #97d28b;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
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
  cursor: pointer;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    margin-left: auto;
  }
  &:hover {
    background-color: #173d33;
    svg {
      path {
        stroke: #97d28b;
      }
    }
  }
`;
export const FooterWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px; */
`;
export const SocialMediaContainer = styled.div`
  width: 56px;
  height: 24px;
  gap: 8px;
  @media (max-width: 767px) {
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    margin-right: auto;
  }
  display: flex;
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
export const MobFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MobSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 28px;
  }
`;
