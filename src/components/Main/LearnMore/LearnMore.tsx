import {
  DescriptionParagraph,
  H1,
  Line,
  Section,
  TextContainer,
} from "../../../GeneralStyles.styled";
import {
  ArrowContainer,
  Button,
  ButtonWrapper,
  DescriptionWrapper,
  DescritpionContainer,
  EmailAdressContainer,
  EmailAdressWrapper,
  LearnMoreDescriptionParagraph,
  LearnMoreImg,
  LearnMoreParagpraph,
  LearnMoreWrapper,
  TitleContainer,
} from "./LearnMore.styled";
import learnMoreMobile from "../../../images/learnMoreMobile.jpg";
import learnMoreTablet from "../../../images/learnMoreTablet.jpg";
import learnMoreDesktop from "../../../images/learnMoreDesktop.jpg";
import { SendArrow } from "../../Svgs/Svgs";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
export const LearnMore = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const func = () => {
    if (isMobile) {
      return learnMoreMobile;
    } else if (isTablet) {
      return learnMoreTablet;
    } else {
      return learnMoreDesktop;
    }
  };
  return (
    <Section id="learnMore">
      <LearnMoreWrapper>
        <TextContainer>
          <TitleContainer>
            <H1>RENEWABLE ENERGY For any task</H1>
          </TitleContainer>
        </TextContainer>
        <DescriptionWrapper>
          <TextContainer>
            <DescritpionContainer>
              <DescriptionParagraph>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </DescriptionParagraph>
            </DescritpionContainer>
          </TextContainer>
          <TextContainer>
            <ButtonWrapper>
              <Link to="cases" smooth={true} duration={500} spy={true}>
                <Button>
                  <LearnMoreParagpraph>Learn more</LearnMoreParagpraph>
                  <ArrowContainer>
                    <SendArrow />
                  </ArrowContainer>
                </Button>
              </Link>
            </ButtonWrapper>
          </TextContainer>
        </DescriptionWrapper>
      </LearnMoreWrapper>
      <Line></Line>
      <EmailAdressContainer>
        <LearnMoreDescriptionParagraph>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </LearnMoreDescriptionParagraph>
        <EmailAdressWrapper>
          <LearnMoreDescriptionParagraph>
            office@ecosolution.com
          </LearnMoreDescriptionParagraph>
          {!isMobile ? (
            <LearnMoreDescriptionParagraph>
              ecosolution © 2023
            </LearnMoreDescriptionParagraph>
          ) : null}
        </EmailAdressWrapper>
      </EmailAdressContainer>
      <LearnMoreImg src={func()} alt="electric" />
    </Section>
  );
};
