import { useState } from "react";
import { H2, Section } from "../../../GeneralStyles.styled";
import {
  Button,
  ButtonWrapper,
  CasesLine,
  DescContainer,
  DescParagraph,
  InteractiveContainer,
  NameContainer,
  NameParagraph,
  NumbersParagraph,
  NumbersWrapper,
} from "./Cases.styled";
import { casesArray } from "../../../arays";
import {
  LeftCaseArrow,
  RightCaseArrow,
  RightUpCaseArrow,
} from "../../Svgs/Svgs";
export const Cases = () => {
  const [idx, setIdx] = useState(0);
  const item = casesArray[idx];
  const onClickLeft = () => {
    if (idx === 0) {
      setIdx(casesArray.length - 1);
    } else {
      setIdx((prev) => prev - 1);
    }
  };
  const onClickRight = () => {
    if (idx === casesArray.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  };
  return (
    <Section>
      <H2 width="264px">Successful cases of our company</H2>
      <InteractiveContainer>
        <NumbersWrapper>
          <NumbersParagraph>{"0" + (idx + 1)}</NumbersParagraph>
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
      <img src={item.icon} alt={item.name} />
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
    </Section>
  );
};
