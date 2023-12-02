import logo from "../../images/logo.svg";
import { Burger } from "../Svgs/Svgs";
import { Link } from "react-scroll";
import {
  ButtonContainer,
  ElipseContainer,
  GetInTouchButton,
  GetInTouchParagraph,
  HeaderContainer,
  HeaderWarpper,
  MenuContainer,
} from "./Header.styled";
interface IHeaderprops {
  menu: boolean;
  setMenu: Function;
}
export const Header: React.FC<IHeaderprops> = ({ menu, setMenu }) => {
  return (
    <HeaderContainer menu={menu.toString()}>
      <img src={logo} alt="logo" />
      <HeaderWarpper>
        <MenuContainer onClick={() => setMenu(!menu)}>
          <Burger />
        </MenuContainer>
        <ButtonContainer>
          <Link to="contactUs" smooth={true} duration={500} spy={true}>
            <GetInTouchButton>
              <GetInTouchParagraph>Get in touch</GetInTouchParagraph>
              <ElipseContainer></ElipseContainer>
            </GetInTouchButton>
          </Link>
        </ButtonContainer>
      </HeaderWarpper>
    </HeaderContainer>
  );
};
