import {
  ArrowUpContainer,
  FooterContainer,
  FooterLine,
  InfoContainer,
  InfoParagraph,
  LogoContainer,
  SocialMediaContainer,
} from "./Footer.styled";
import logo from "../../images/logo.svg";
import arrowUp from "../../images/arrowUp.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine></FooterLine>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <ArrowUpContainer>
          <img src={arrowUp} alt="arrowUp" />
        </ArrowUpContainer>
      </LogoContainer>
      <SocialMediaContainer>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </SocialMediaContainer>
      <InfoContainer>
        <InfoParagraph>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </InfoParagraph>
        <InfoParagraph>office@ecosolution.com</InfoParagraph>
        <InfoParagraph>ecosolution © 2023</InfoParagraph>
      </InfoContainer>
    </FooterContainer>
  );
};
