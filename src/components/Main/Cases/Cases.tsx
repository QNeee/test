import { useState } from "react";
import { H2, Section } from "../../../GeneralStyles.styled";
import {
  Button,
  ButtonWrapper,
  CasesLine,
  DescContainer,
  DescParagraph,
  ImgsContainer,
  InteractiveContainer,
  ItemContainer,
  Line,
  NameContainer,
  NameParagraph,
  NumbersParagraph,
  NumbersWrapper,
  TitleContainer,
  Wrapper,
} from "./Cases.styled";
import { casesArray } from "../../../arays";
import {
  LeftCaseArrow,
  RightCaseArrow,
  RightUpCaseArrow,
} from "../../Svgs/Svgs";
import { useMediaQuery } from "react-responsive";

export const Cases = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [idx, setIdx] = useState(0);
  const item = casesArray[idx];
  const func = () => {
    return isMobile ? [item] : casesArray.slice(idx, idx + 2);
  };
  const onClickLeft = () => {
    if (idx === 0) {
      setIdx(casesArray.length - 1);
    } else {
      setIdx((prev) => (isMobile ? prev - 1 : prev - 2));
    }
  };
  const onClickRight = () => {
    if (idx === casesArray.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => (isMobile ? prev + 1 : prev + 2));
    }
  };
  const funcHelper = () => {
    if (!isMobile) {
      if (func().length === 1) {
        return casesArray.length;
      } else {
        return idx + 2;
      }
    } else {
      return idx + 1;
    }
  };
  return (
    <Section id="cases">
      <Wrapper>
        <TitleContainer>
          <H2>Successful cases of our company</H2>
        </TitleContainer>
        <Line></Line>
        <InteractiveContainer>
          <NumbersWrapper>
            <NumbersParagraph>{"0" + funcHelper()}</NumbersParagraph>
            <NumbersParagraph primary="primary">
              /{"0" + casesArray.length}
            </NumbersParagraph>
          </NumbersWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={onClickLeft}>
              <LeftCaseArrow />
            </Button>
            <Button type="button" onClick={onClickRight}>
              <RightCaseArrow />
            </Button>
          </ButtonWrapper>
        </InteractiveContainer>
      </Wrapper>
      <ImgsContainer>
        {func().map((item, index) => (
          <ItemContainer key={index}>
            <img src={item.icon} alt={item.name} width={"100%"} />
            <NameContainer>
              <NameParagraph>{item.name}</NameParagraph>
              <Button flag="flag" type="button" onClick={onClickRight}>
                <RightUpCaseArrow />
              </Button>
            </NameContainer>
            <CasesLine></CasesLine>
            <DescContainer>
              <DescParagraph>{item.desc}</DescParagraph>
              <DescParagraph>{item.date}</DescParagraph>
            </DescContainer>
          </ItemContainer>
        ))}
      </ImgsContainer>
    </Section>
  );
};
