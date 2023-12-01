import {
  DescriptionParagraph,
  H2,
  H6,
  Section,
  TextContainer,
} from "../../../GeneralStyles.styled";
import opennes from "../../../images/openess.svg";
import responsibility from "../../../images/responsibility.svg";
import innovation from "../../../images/innovation.svg";
import quality from "../../../images/quality.svg";
import {
  DescContainer,
  DescParagraph,
  DescritpionContainer,
  ItemsWrapper,
  MainValuesContainer,
  MainValuesWrapper,
  NameContainer,
  TitleContainer,
  ValuesContainer,
  ValuesLine,
} from "./About.styled";
import { useMediaQuery } from "react-responsive";
import valuesTablet from "../../../images/TabletValues.jpg";
import valuesTablet1 from "../../../images/TabletValues1.jpg";
export const About = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  return (
    <Section>
      <MainValuesWrapper>
        <TextContainer>
          <TitleContainer>
            <H2>Main values of our company</H2>
          </TitleContainer>
        </TextContainer>
        <DescritpionContainer>
          <DescriptionParagraph>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </DescriptionParagraph>
        </DescritpionContainer>
      </MainValuesWrapper>
      <MainValuesContainer>
        <ValuesContainer>
          <ItemsWrapper>
            <NameContainer>
              <img src={opennes} alt={"opennes"} />
              <H6>Openness</H6>
            </NameContainer>
            <ValuesLine></ValuesLine>
            <DescContainer>
              <DescParagraph>
                to the world, people, new ideas and projects
              </DescParagraph>
            </DescContainer>
          </ItemsWrapper>
        </ValuesContainer>
        <ValuesContainer>
          <ItemsWrapper>
            <NameContainer>
              <img src={responsibility} alt={"responsibility"} />
              <H6>Responsibility</H6>
            </NameContainer>
            <ValuesLine></ValuesLine>
            <DescContainer>
              <DescParagraph>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </DescParagraph>
            </DescContainer>
          </ItemsWrapper>
        </ValuesContainer>
        {isTablet ? (
          <li>
            <img src={valuesTablet} alt="valuesTablet" />
          </li>
        ) : null}
        {isTablet ? (
          <li>
            <img src={valuesTablet1} alt="valuesTablet1" />
          </li>
        ) : null}
        <ValuesContainer>
          <ItemsWrapper>
            <NameContainer>
              <img src={innovation} alt={"innovation"} />
              <H6>Innovation</H6>
            </NameContainer>
            <ValuesLine></ValuesLine>
            <DescContainer>
              <DescParagraph>
                we use the latest technology to implement non-standard solutions
              </DescParagraph>
            </DescContainer>
          </ItemsWrapper>
        </ValuesContainer>
        <ValuesContainer>
          <ItemsWrapper>
            <NameContainer>
              <img src={quality} alt={"quality"} />
              <H6>Quality</H6>
            </NameContainer>
            <ValuesLine></ValuesLine>
            <DescContainer>
              <DescParagraph>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </DescParagraph>
            </DescContainer>
          </ItemsWrapper>
        </ValuesContainer>
      </MainValuesContainer>
    </Section>
  );
};
