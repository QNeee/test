import logo from "../../images/logo.svg";
import { Burger } from "../Svgs/Svgs";
import { HeaderContainer, MenuContainer } from "./Header.styled";
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <MenuContainer>
        <Burger />
      </MenuContainer>
    </HeaderContainer>
  );
};
