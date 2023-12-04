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
  const [startX, setStartX] = useState<number | null>(null);
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
  function handleSwipe(currentX: number) {
    if (startX === null) return;
    const deltaX = currentX - startX;
    if (deltaX > 50) {
      onClickLeft();
    } else if (deltaX < -50) {
      onClickRight();
    }
    setStartX(null);
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipe(e.changedTouches[0].clientX);
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
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.changedTouches[0].clientX);
  };

  return (
    <Section id="cases">
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <ImgsContainer onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {func().map((item, index) => (
            <ItemContainer key={index}>
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
            </ItemContainer>
          ))}
        </ImgsContainer>
      </div>
    </Section>
  );
};
