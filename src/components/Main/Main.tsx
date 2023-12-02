import { About } from "./About/About";
import { Cases } from "./Cases/Cases";
import { ContactUs } from "./ContactUs/ContactUs";
import { Electricity } from "./Electricity/Electricity";
import { Faq } from "./Faq/Faq";
import { LearnMore } from "./LearnMore/LearnMore";
import { MainContainer } from "./Main.styled";

export const Main = () => {
  return (
    <MainContainer>
      <LearnMore />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
    </MainContainer>
  );
};
