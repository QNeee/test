import { H2, Section } from "../../../GeneralStyles.styled";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";
import {
  AnswerContainer,
  ContactUsButton,
  ContactUsParagraph,
  DontFindContainer,
  DontFindWrapper,
  FaqContainer,
  FaqItem,
  FaqLine,
  FaqWraper,
  Icon,
  ItemContainer,
  QuestionContainer,
  TitleContainer,
} from "./Faq.styled";
import { faqArray } from "../../../arays";
import { useState } from "react";
import { ElipseContainer } from "../../Header/Header.styled";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { onClick } from "../../../helper";
export const Faq = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [data, setData] = useState(faqArray);
  const onClickIcon = (idx: number) => {
    setData((prevData) =>
      prevData.map((item, index) => ({
        ...item,
        isOpen: index === idx ? !item.isOpen : false,
      }))
    );
  };
  return (
    <Section id="faq">
      <FaqWraper>
        <TitleContainer>
          <H2>Frequently Asked Questions</H2>
          {!isMobile ? (
            <DontFindWrapper>
              <DontFindContainer>
                Didn't find the answer to your question?
              </DontFindContainer>
              <Link
                to="contactUs"
                smooth={true}
                duration={500}
                spy={true}
                onClick={onClick}
              >
                <ContactUsButton>
                  <ContactUsParagraph>Contact Us</ContactUsParagraph>
                  <ElipseContainer></ElipseContainer>
                </ContactUsButton>
              </Link>
            </DontFindWrapper>
          ) : null}
        </TitleContainer>
        <FaqContainer>
          {data.map((item, index) => (
            <FaqItem key={index} onClick={() => onClickIcon(index)}>
              <FaqLine></FaqLine>
              <ItemContainer>
                <QuestionContainer>{item.question}</QuestionContainer>
                <Icon
                  src={item.isOpen ? minus : plus}
                  alt={item.isOpen ? "minus" : "plus"}
                />
                <AnswerContainer>{item.isOpen && item.answer}</AnswerContainer>
              </ItemContainer>
            </FaqItem>
          ))}
        </FaqContainer>
      </FaqWraper>
      {isMobile ? (
        <DontFindWrapper>
          <DontFindContainer>
            Didn't find the answer to your question?
          </DontFindContainer>
          <Link
            to="contactUs"
            smooth={true}
            duration={500}
            spy={true}
            onClick={onClick}
          >
            <ContactUsButton>
              <ContactUsParagraph>Contact Us</ContactUsParagraph>
              <ElipseContainer></ElipseContainer>
            </ContactUsButton>
          </Link>
        </DontFindWrapper>
      ) : null}
    </Section>
  );
};
