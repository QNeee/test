import { ArrowMenu, Close, Facebook, Instagram } from "../../Svgs/Svgs";
import {
  BurgerContainer,
  BurgerLine,
  CloseContainer,
  Container,
  ContainerWrapper,
  ItemContainer,
  SocNetworkContainer,
} from "./BurgerMenu.styled";
interface IBurgerMenuProps {
  menu: boolean;
  setMenu: Function;
}
export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ menu, setMenu }) => {
  return (
    <BurgerContainer id="menu">
      <div style={{ padding: "24px" }}>
        <CloseContainer onClick={() => setMenu(!menu)}>
          <Close />
          <p>close</p>
        </CloseContainer>
        <BurgerLine />
        <nav>
          <Container>
            <ItemContainer>
              <ContainerWrapper>
                <p>Main</p>
                <ArrowMenu />
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <p>About</p>
                <ArrowMenu />
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <p>Cases</p>
                <ArrowMenu />
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <p>FAQ</p>
                <ArrowMenu />
              </ContainerWrapper>
            </ItemContainer>
            <ItemContainer>
              <ContainerWrapper>
                <p>Contact Us</p>
                <ArrowMenu />
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
