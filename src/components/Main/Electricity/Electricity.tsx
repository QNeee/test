import { H2, H5, Section } from "../../../GeneralStyles.styled";
import { KWHContainer, KWHNumbers } from "./Electricity.styled";

export const Electricity = () => {
  return (
    <Section>
      <H2 align="center">Electricity we produced for all time</H2>
      <KWHContainer>
        <KWHNumbers>1.134.147.814</KWHNumbers>
        <H5>kWh</H5>
      </KWHContainer>
    </Section>
  );
};
