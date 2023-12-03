import { useEffect, useState } from "react";
import { H2, H5, Section } from "../../../GeneralStyles.styled";
import {
  KWHContainer,
  KWHNumbers,
  KWHTitleContainer,
  TitleContainer,
} from "./Electricity.styled";

export const Electricity = () => {
  const [count, setCount] = useState("1.134.147.814");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const parts = prevCount.split(".");
        let lastPart = parseInt(parts[parts.length - 1]);
        parts[parts.length - 1] = (++lastPart).toString();
        return parts.join(".");
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Section>
      <TitleContainer>
        <H2 align="center">Electricity we produced for all time</H2>
      </TitleContainer>
      <KWHContainer>
        <KWHNumbers>{count}</KWHNumbers>
        <KWHTitleContainer>
          <H5>kWh</H5>
        </KWHTitleContainer>
      </KWHContainer>
    </Section>
  );
};
