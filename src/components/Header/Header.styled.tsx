import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  margin-bottom: 146px;
`;
export const MenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 50%;
  width: 40px;
  height: 39px;
  background-color: #dcefd8;
  &:hover {
    background-color: #97d28b;
  }
`;
