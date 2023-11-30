import {
  DescriptionParagraph,
  H2,
  H6,
  Section,
  TextContainer,
} from "../../../GeneralStyles.styled";
import { aboutAray } from "../../../arays";
import {
  DescContainer,
  DescParagraph,
  ItemsWrapper,
  MainValuesContainer,
  NameContainer,
  ValuesContainer,
  ValuesLine,
} from "./About.styled";

export const About = () => {
  return (
    <Section>
      <TextContainer>
        <H2>Main values of our company</H2>
      </TextContainer>
      <DescriptionParagraph>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </DescriptionParagraph>
      <MainValuesContainer>
        {aboutAray.map((item, index) => (
          <ValuesContainer key={index}>
            <ItemsWrapper>
              <NameContainer>
                <img src={item.icon} alt={item.name} />
                <H6>{item.name}</H6>
              </NameContainer>
              <ValuesLine></ValuesLine>
              <DescContainer>
                <DescParagraph>{item.desc}</DescParagraph>
              </DescContainer>
            </ItemsWrapper>
          </ValuesContainer>
        ))}
      </MainValuesContainer>
    </Section>
  );
};
