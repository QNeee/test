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
import { Facebook, FooterArrow, Instagram } from "../Svgs/Svgs";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine></FooterLine>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <ArrowUpContainer>
          <FooterArrow />
        </ArrowUpContainer>
      </LogoContainer>
      <SocialMediaContainer>
        <Facebook />
        <Instagram />
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
