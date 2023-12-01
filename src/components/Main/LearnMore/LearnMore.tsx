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
  LearnMoreDescriptionParagraph,
  LearnMoreImg,
  LearnMoreParagpraph,
  LearnMoreWrapper,
  TitleContainer,
} from "./LearnMore.styled";
import learnMoreMobile from "../../../images/learnMoreMobile.jpg";
import learnMoreTablet from "../../../images/learnMoreTablet.jpg";
import { SendArrow } from "../../Svgs/Svgs";
import { useMediaQuery } from "react-responsive";
export const LearnMore = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  return (
    <Section>
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
              <Button>
                <LearnMoreParagpraph>Learn more</LearnMoreParagpraph>
                <ArrowContainer>
                  <SendArrow />
                </ArrowContainer>
              </Button>
            </ButtonWrapper>
          </TextContainer>
        </DescriptionWrapper>
      </LearnMoreWrapper>
      <Line></Line>
      <EmailAdressContainer>
        <LearnMoreDescriptionParagraph>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </LearnMoreDescriptionParagraph>
        <LearnMoreDescriptionParagraph>
          office@ecosolution.com
        </LearnMoreDescriptionParagraph>
        {isTablet ? (
          <LearnMoreDescriptionParagraph>
            ecosolution © 2023
          </LearnMoreDescriptionParagraph>
        ) : null}
      </EmailAdressContainer>
      <LearnMoreImg
        src={!isTablet ? learnMoreMobile : learnMoreTablet}
        alt="electric"
      />
    </Section>
  );
};
