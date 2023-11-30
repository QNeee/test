import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import { HeaderContainer, MenuContainer } from "./Header.styled";
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <MenuContainer>
        <img src={menu} alt="menu" width={16} />
      </MenuContainer>
    </HeaderContainer>
  );
};
