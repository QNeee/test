import logo from "../../images/logo.svg";
import { Burger } from "../Svgs/Svgs";
import {
  ButtonContainer,
  ElipseContainer,
  GetInTouchButton,
  GetInTouchParagraph,
  HeaderContainer,
  HeaderWarpper,
  MenuContainer,
} from "./Header.styled";
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <HeaderWarpper>
        <MenuContainer>
          <Burger />
        </MenuContainer>
        <ButtonContainer>
          <GetInTouchButton>
            <GetInTouchParagraph>Get in touch</GetInTouchParagraph>
            <ElipseContainer></ElipseContainer>
          </GetInTouchButton>
        </ButtonContainer>
      </HeaderWarpper>
    </HeaderContainer>
  );
};
