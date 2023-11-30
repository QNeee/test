import styled from "styled-components";

export const FaqLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: #97d28b;
`;
export const QuestionContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
`;
export const AnswerContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
`;
export const FaqContainer = styled.ul`
  padding: 16px 0px 16px 0px;
  margin-bottom: 36px;
`;
export const FaqItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ItemContainer = styled.div`
  margin-left: 24px;
  position: relative;
`;
export const Icon = styled.img`
  position: absolute;
  top: 25px;
  left: -25px;
`;
export const DontFindContainer = styled.p`
  white-space: nowrap;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  text-align: center;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactUsButton = styled.button`
  border-radius: 500px;
  border: none;
  padding: 10px 16px 10px 16px;
  width: 130px;
  height: 39px;
  background-color: #97d28b;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContactUsParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  color: #173d33;
  letter-spacing: -0.04em;
`;
