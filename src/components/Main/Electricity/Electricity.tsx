import { H2, H5, Section } from "../../../GeneralStyles.styled";
import {
  KWHContainer,
  KWHNumbers,
  KWHTitleContainer,
  TitleContainer,
} from "./Electricity.styled";

export const Electricity = () => {
  return (
    <Section>
      <TitleContainer>
        <H2 align="center">Electricity we produced for all time</H2>
      </TitleContainer>
      <KWHContainer>
        <KWHNumbers>1.134.147.814</KWHNumbers>
        <KWHTitleContainer>
          <H5>kWh</H5>
        </KWHTitleContainer>
      </KWHContainer>
    </Section>
  );
};
