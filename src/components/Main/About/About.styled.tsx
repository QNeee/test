import styled from "styled-components";

export const MainValuesContainer = styled.ul`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    li:nth-child(3),
    li:nth-child(4) {
      grid-column: span 2;
    }
  }
  gap: 24px;
  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const ValuesContainer = styled.li`
  height: 100%;
  background-color: #eaedf1;
`;
export const ValuesLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
  margin-top: 37px;
  margin-bottom: 12px;
  @media (min-width: 1280px) {
    margin-bottom: 24px;
    margin-top: 94px;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > img {
    margin-right: 8px;
  }
`;
export const ItemsWrapper = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  @media (min-width: 1280px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 48px;
  }
`;
export const DescParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
  text-align: justify;
  color: #173d33;
  letter-spacing: -0.04em;
`;
export const DescContainer = styled.div`
  width: 100%;
`;
export const MainValuesWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
  }
`;
export const TitleContainer = styled.div`
  width: 320px;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 272px;
    margin-right: 82px;
  }
  @media (min-width: 1280px) {
    width: 365px;
  }
`;
export const DescritpionContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-left: 11px;
    width: 353px;
    margin-left: 40px;
    border-left: 1px solid #97d28b;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    width: 459px;
    padding-left: 180px;
    border-left: 1px solid #97d28b;
  }
`;
