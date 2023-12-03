import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledLink = styled(Link).attrs((props) => ({
  activeClass: "active",
}))`
  display: flex;
  &.active p {
    color: white !important;
  }
  &.active svg {
    path {
      stroke: white !important;
    }
  }
`;
export const BurgerContainer = styled.div`
  backdrop-filter: blur(10px);
  width: calc(100vw - 40px);
  height: calc(100vh - 72px);
  border-radius: 25px;
  background-color: #173d33bf;
  position: absolute;
  z-index: 233;
  top: 0;
  @media (max-width: 767px) {
    left: 0;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 320px;
    right: 0;
  }
  @media (min-width: 1280px) {
    width: 365px;
    right: 0;
  }
`;

export const BurgerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 24px;
`;
export const CloseContainer = styled.div`
  cursor: pointer;
  width: 69px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
  &:hover {
    color: #97d28b;
    svg {
      path {
        stroke: #97d28b;
      }
    }
  }
  p {
    margin-right: 4px;
  }
`;
export const Container = styled.ul`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.04em;
  color: #ffffff40;
  svg {
    path {
      stroke: #ffffff40;
    }
  }
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const ItemContainer = styled.li`
  max-width: 132px;
  cursor: pointer;
  gap: 8px;
  &:hover {
    color: #97d28b;
    svg {
      path {
        stroke: #97d28b;
      }
    }
  }
`;
export const ContainerWrapper = styled.div`
  svg {
    margin-left: 8px;
  }
`;
export const SocNetworkContainer = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
  svg {
    path {
      stroke: white;
    }
  }
  svg:not(:last-child) {
    margin-right: 8px;
  }
`;
