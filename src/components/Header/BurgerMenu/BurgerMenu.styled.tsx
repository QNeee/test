import styled from "styled-components";

export const BurgerContainer = styled.div`
  z-index: 222;
  width: calc(100vw - 40px);
  margin-left: 20px;
  height: 100%;
  border-radius: 25px;
  background-color: #173d33bf;
  position: absolute;
  margin-top: 20px;
  top: 0;
  left: 0;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 50vw;
    top: 10px;
    left: 51%;
  }
  @media (min-width: 1280px) {
    width: 25vw;
    top: 10px;
    left: 81%;
  }
  svg {
    path {
      stroke: white;
    }
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
  color: white;
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
  display: flex;
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
  svg:not(:last-child) {
    margin-right: 8px;
  }
`;
