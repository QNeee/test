import { Burger, Logo } from "../Svgs/Svgs";
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
import { Menu } from "./Menu/Menu";
interface IHeaderprops {
  menu: boolean;
  setMenu: Function;
  hover: boolean;
  setHover: Function;
}
export const Header: React.FC<IHeaderprops> = ({
  menu,
  setMenu,
  hover,
  setHover,
}) => {
  return (
    <HeaderContainer menu={menu.toString()}>
      {menu && <Menu menu={menu} setMenu={setMenu} />}
      <div
        style={{ filter: menu ? "blur(1px)" : "none" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Logo hover={hover.toString()} />
      </div>
      <HeaderWarpper style={{ filter: menu ? "blur(1px)" : "none" }}>
        <MenuContainer
          onClick={(e) => {
            setMenu(!menu);
          }}
        >
          <Burger />
        </MenuContainer>
        <ButtonContainer>
          <Link to="contactUs" smooth={true} duration={500} spy={true}>
            <GetInTouchButton id="btn">
              <GetInTouchParagraph>Get in touch</GetInTouchParagraph>
              <ElipseContainer></ElipseContainer>
            </GetInTouchButton>
          </Link>
        </ButtonContainer>
      </HeaderWarpper>
    </HeaderContainer>
  );
};
