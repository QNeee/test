import { H2, Section } from "../../../GeneralStyles.styled";
import {
  ContactUsContainer,
  ContactUsContainerInItem,
  ContactUsItemContainer,
  ContactUsParagraph,
  ContactUsTitle,
  IconsContainer,
  SocialNetworkContainer,
} from "./ContactUs.styled";
import phone from "../../../images/phone.svg";
import email from "../../../images/email.svg";
import adress from "../../../images/adress.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import { ContactUsForm } from "./ContactUsForm/ContactUsForm";
export const ContactUs = () => {
  return (
    <Section>
      <H2 align="center">Contact us</H2>
      <ContactUsContainer>
        <ContactUsItemContainer>
          <ContactUsTitle>Phone:</ContactUsTitle>
          <ContactUsContainerInItem>
            <img src={phone} alt="phone" />
            <ContactUsParagraph>38 (098) 12 34 567</ContactUsParagraph>
          </ContactUsContainerInItem>
          <ContactUsContainerInItem>
            <img src={phone} alt="phone" />
            <ContactUsParagraph>38 (098) 12 34 567</ContactUsParagraph>
          </ContactUsContainerInItem>
        </ContactUsItemContainer>
        <ContactUsItemContainer>
          <ContactUsTitle>Email:</ContactUsTitle>
          <ContactUsContainerInItem>
            <img src={email} alt="email" />
            <ContactUsParagraph>office@ecosolution.com</ContactUsParagraph>
          </ContactUsContainerInItem>
        </ContactUsItemContainer>
        <ContactUsItemContainer>
          <ContactUsTitle>Address:</ContactUsTitle>
          <ContactUsContainerInItem>
            <img src={adress} alt="adress" />
            <ContactUsParagraph>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ContactUsParagraph>
          </ContactUsContainerInItem>
        </ContactUsItemContainer>
        <ContactUsItemContainer>
          <ContactUsTitle>Social Networks:</ContactUsTitle>
          <SocialNetworkContainer>
            <IconsContainer>
              <img src={facebook} alt="facebook" />
            </IconsContainer>
            <IconsContainer>
              <img src={instagram} alt="instagram" />
            </IconsContainer>
          </SocialNetworkContainer>
        </ContactUsItemContainer>
      </ContactUsContainer>
      <ContactUsForm></ContactUsForm>
    </Section>
  );
};
