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
  EmailAdressContainer,
  LearnMoreImg,
  LearnMoreParagpraph,
} from "./LearnMore.styled";
import learnMoreMobile from "../../../images/learnMoreMobile.jpg";
import { SendArrow } from "../../Svgs/Svgs";
export const LearnMore = () => {
  return (
    <Section>
      <TextContainer>
        <H1>RENEWABLE ENERGY For any task</H1>
      </TextContainer>
      <TextContainer>
        <DescriptionParagraph>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </DescriptionParagraph>
      </TextContainer>
      <TextContainer>
        <Button>
          <LearnMoreParagpraph>Learn more</LearnMoreParagpraph>
          <ArrowContainer>
            <SendArrow />
          </ArrowContainer>
        </Button>
      </TextContainer>
      <Line></Line>
      <EmailAdressContainer>
        <DescriptionParagraph>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </DescriptionParagraph>
        <DescriptionParagraph>office@ecosolution.com</DescriptionParagraph>
      </EmailAdressContainer>
      <LearnMoreImg src={learnMoreMobile} alt="electric" />
    </Section>
  );
};
