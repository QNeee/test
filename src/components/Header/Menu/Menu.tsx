import { ArrowMenu, Close, Facebook, Instagram } from "../../Svgs/Svgs";
import {
  BurgerContainer,
  BurgerLine,
  CloseContainer,
  Container,
  ContainerWrapper,
  ItemContainer,
  SocNetworkContainer,
  StyledLink,
} from "./Menu.styled";
interface IBurgerMenuProps {
  menu: boolean;
  setMenu: Function;
}
export const Menu: React.FC<IBurgerMenuProps> = ({ menu, setMenu }) => {
  const onClick = () => {
    setMenu(!menu);
  };
  return (
    <BurgerContainer id="menu">
      <div style={{ padding: "24px" }}>
        <CloseContainer onClick={onClick}>
          <Close />
          <p>close</p>
        </CloseContainer>
        <BurgerLine />
        <nav>
          <Container>
            <ItemContainer>
              <ContainerWrapper>
                <StyledLink
                  to="learnMore"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={onClick}
                >
                  <p>Main</p>
                  <ArrowMenu />
                </StyledLink>
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <StyledLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={onClick}
                >
                  <p>About</p>
                  <ArrowMenu />
                </StyledLink>
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <StyledLink
                  to="cases"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={onClick}
                >
                  <p>Cases</p>
                  <ArrowMenu />
                </StyledLink>
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <StyledLink
                  to="faq"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={onClick}
                >
                  <p>FAQ</p>
                  <ArrowMenu />
                </StyledLink>
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <StyledLink
                  to="contactUs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={onClick}
                >
                  <p>Contact Us</p>
                  <ArrowMenu />
                </StyledLink>
              </ContainerWrapper>
            </ItemContainer>
          </Container>
        </nav>
        <SocNetworkContainer>
          <Facebook />
          <Instagram />
        </SocNetworkContainer>
      </div>
    </BurgerContainer>
  );
};
