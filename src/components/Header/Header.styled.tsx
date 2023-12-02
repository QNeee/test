import { styled } from "styled-components";
import elipse from "../../images/ellipse.svg";
import arrowDown from "../../images/arrowDown.svg";
export const HeaderContainer = styled.header<{ menu: string }>`
  display: flex;
  position: fixed;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
export const MenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 39px;
  margin-right: 35px;
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 12px;
  }
  background-color: #dcefd8;
  &:hover {
    background-color: #97d28b;
  }
`;
export const GetInTouchButton = styled.button`
  cursor: pointer;
  width: 140px;
  height: 39px;
  border-radius: 500px;
  display: flex;
  border: none;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1280px) {
    margin-left: 12px;
  }
  padding: 10px 16px 10px 16px;
  background-color: #97d28b;
  &:hover {
    background-color: #173d33;
    p {
      color: #97d28b;
    }
    div {
      background-image: url(${arrowDown});
      background-size: cover;
    }
  }
`;
export const ButtonContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  /* margin-right: auto; */
`;
export const HeaderWarpper = styled.div`
  margin-left: 11px;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;
export const GetInTouchParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
`;
export const ElipseContainer = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 500px;

  background-image: url(${elipse});
  background-size: cover;
`;
