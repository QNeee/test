import { H2, Section } from "../../../GeneralStyles.styled";
import {
  ContactUsContainer,
  ContactUsContainerInItem,
  ContactUsItemContainer,
  ContactUsParagraph,
  ContactUsTitle,
  ContactUsWrapper,
  IconsContainer,
  SocialNetworkContainer,
} from "./ContactUs.styled";
import { ContactUsForm } from "./ContactUsForm/ContactUsForm";
import { Adress, Email, Facebook, Instagram, Phone } from "../../Svgs/Svgs";
import { useMediaQuery } from "react-responsive";
export const ContactUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Section style={{ marginTop: !isMobile ? "-100px" : "" }}>
      <H2 align="center">Contact us</H2>
      <ContactUsWrapper>
        <ContactUsContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Phone:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Phone />
              <ContactUsParagraph>38 (098) 12 34 567</ContactUsParagraph>
            </ContactUsContainerInItem>
            <ContactUsContainerInItem>
              <Phone />
              <ContactUsParagraph>38 (098) 12 34 567</ContactUsParagraph>
            </ContactUsContainerInItem>
          </ContactUsItemContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Email:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Email />
              <ContactUsParagraph>office@ecosolution.com</ContactUsParagraph>
            </ContactUsContainerInItem>
          </ContactUsItemContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Address:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Adress />
              <ContactUsParagraph>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactUsParagraph>
            </ContactUsContainerInItem>
          </ContactUsItemContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Social Networks:</ContactUsTitle>
            <SocialNetworkContainer>
              <IconsContainer>
                <Facebook />
              </IconsContainer>
              <IconsContainer>
                <Instagram />
              </IconsContainer>
            </SocialNetworkContainer>
          </ContactUsItemContainer>
        </ContactUsContainer>
        <ContactUsForm></ContactUsForm>
      </ContactUsWrapper>
    </Section>
  );
};
