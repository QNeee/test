import {
  ArrowUpContainer,
  FooterContainer,
  FooterLine,
  FooterWrapper,
  InfoContainer,
  InfoParagraph,
  LogoContainer,
  MobFooterContainer,
  MobSocialMedia,
  SocialMediaContainer,
} from "./Footer.styled";
import logo from "../../images/logo.svg";
import { Facebook, FooterArrow, Instagram } from "../Svgs/Svgs";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { onClick } from "../../helper";
export const Footer = () => {
  const isMob = useMediaQuery({ maxWidth: 767 });
  return (
    <FooterContainer id="foot">
      <FooterLine></FooterLine>
      {isMob ? (
        <FooterWrapper>
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
        </FooterWrapper>
      ) : (
        <MobFooterContainer>
          <div>
            <img src={logo} alt="logo" style={{ marginBottom: "16px" }} />
            <InfoParagraph>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </InfoParagraph>
          </div>
          <MobSocialMedia>
            <SocialMediaContainer>
              <Facebook />
              <Instagram />
            </SocialMediaContainer>
            <InfoParagraph>office@ecosolution.com</InfoParagraph>
          </MobSocialMedia>
          <div>
            <Link
              to="learnMore"
              smooth={true}
              duration={500}
              spy={true}
              onClick={onClick}
            >
              <ArrowUpContainer>
                <FooterArrow />
              </ArrowUpContainer>
            </Link>
            <InfoParagraph style={{ marginTop: "18px" }}>
              ecosolution © 2023
            </InfoParagraph>
          </div>
        </MobFooterContainer>
      )}
    </FooterContainer>
  );
};
