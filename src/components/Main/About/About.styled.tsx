import styled from "styled-components";

export const MainValuesContainer = styled.ul`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  gap: 24px;
`;
export const ValuesContainer = styled.li`
  width: 100%;
  height: 197px;
  background-color: #eaedf1;
`;
export const ValuesLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
  margin-top: 37px;
  margin-bottom: 12px;
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
`;
export const DescParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  text-align: justify;
  color: #173d33;
`;
export const DescContainer = styled.div`
  width: 100%;
`;
