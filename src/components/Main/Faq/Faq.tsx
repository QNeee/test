import { H2, Section } from "../../../GeneralStyles.styled";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";
import {
  AnswerContainer,
  ArrowContainer,
  ContactUsButton,
  ContactUsParagraph,
  DontFindContainer,
  FaqContainer,
  FaqItem,
  FaqLine,
  Icon,
  ItemContainer,
  QuestionContainer,
} from "./Faq.styled";
import { faqArray } from "../../../arays";
import { useState } from "react";
import { ArrowDown } from "../../Svgs/Svgs";
export const Faq = () => {
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
    <Section>
      <H2>Frequently Asked Questions</H2>
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
      <DontFindContainer>
        Didn't find the answer to your question?
      </DontFindContainer>
      <ContactUsButton>
        <ContactUsParagraph>Contact Us</ContactUsParagraph>
        <ArrowContainer>
          <ArrowDown />
        </ArrowContainer>
      </ContactUsButton>
    </Section>
  );
};
