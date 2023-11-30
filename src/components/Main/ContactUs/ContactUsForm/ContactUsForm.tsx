import {
  ArrowContainer,
  Form,
  FormButton,
  FormButtonTitle,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./ContactUsForm.styled";
import { SendArrow } from "../../../Svgs/Svgs";
export const ContactUsForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormLabel>
        * Full name:
        <FormInput />
      </FormLabel>
      <FormLabel>
        * E-mail:
        <FormInput />
      </FormLabel>
      <FormLabel>
        * Phone:
        <FormInput />
      </FormLabel>
      <FormLabel>
        Message:
        <FormTextArea></FormTextArea>
      </FormLabel>
      <FormButton type="submit">
        <FormButtonTitle>Send</FormButtonTitle>
        <ArrowContainer>
          <SendArrow />
        </ArrowContainer>
      </FormButton>
    </Form>
  );
};
