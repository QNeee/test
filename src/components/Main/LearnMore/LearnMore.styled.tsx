import styled from "styled-components";

export const LearnMoreParagpraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: justify;
  color: #173d33;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 39px;
  width: 141px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 500px;
  border: 1px solid #97d28b;
  cursor: pointer;
  padding: 4px 4px 4px 16px;
  &:hover {
    background-color: #173d33;
    p {
      color: #97d28b;
    }
  }
`;
export const ArrowContainer = styled.div`
  border-radius: 100px;
  background-color: #97d28b;
  padding: 8px;
  margin-left: auto;
`;
export const EmailAdressContainer = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  p + p {
    margin-top: 8px;
  }
`;
export const LearnMoreImg = styled.img`
  max-width: 100%;
  width: 100%;
`;
