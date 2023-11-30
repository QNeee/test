import styled from "styled-components";

export const Form = styled.form`
  max-width: 480px;
  background-color: #eaedf1;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 12px;
  padding-right: 12px;
`;
export const FormLabel = styled.label`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
`;
export const FormInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-top: 8px;
  padding-bottom: 8x;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 28px;
`;
export const FormTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 147px;
  border-bottom: 1px solid #97d28b;
`;
export const FormButton = styled.button`
  margin-top: 16px;
  display: flex;
  align-items: center;
  height: 39px;
  width: 99px;
  margin-left: auto;
  border-radius: 500px;
  border: 1px solid #97d28b;
  cursor: pointer;
`;
export const ArrowContainer = styled.div`
  border-radius: 100px;
  padding: 8px;
  background-color: #97d28b;
`;

export const FormButtonTitle = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  margin-left: 16px;
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
  margin-right: 12px;
`;
