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
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const func = () => {
    if (isTablet) return "-100px";
    if (isDesktop) return "-120px";
    return "";
  };
  return (
    <Section style={{ marginTop: func() }} id="contactUs">
      <H2 align="center">Contact us</H2>
      <ContactUsWrapper>
        <ContactUsContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Phone:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Phone />
              <ContactUsParagraph>
                <a href="tel:+380981234567">38 (098) 12 34 567</a>
              </ContactUsParagraph>
            </ContactUsContainerInItem>
            <ContactUsContainerInItem>
              <Phone />
              <ContactUsParagraph>
                <a href="tel:+380981234567">38 (098) 12 34 567</a>
              </ContactUsParagraph>
            </ContactUsContainerInItem>
          </ContactUsItemContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Email:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Email />
              <ContactUsParagraph>
                <a href="mailto:office@ecosolution.com">
                  office@ecosolution.com
                </a>
              </ContactUsParagraph>
            </ContactUsContainerInItem>
          </ContactUsItemContainer>
          <ContactUsItemContainer>
            <ContactUsTitle>Address:</ContactUsTitle>
            <ContactUsContainerInItem>
              <Adress
                width={isDesktop ? "24" : ""}
                height={isDesktop ? "24" : ""}
              />
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
