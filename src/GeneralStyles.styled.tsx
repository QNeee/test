import { styled } from "styled-components";
export const Line = styled.div`
  height: 1px;
  @media (max-width: 767px) {
    max-width: 480px;
  }
  @media (min-width: 768) {
    width: 768px;
  }
  background-color: #97d28b;
  margin-bottom: 24px;
`;
export const TextContainer = styled.div`
  margin-bottom: 24px;
`;
export const H6 = styled.h6`
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #173d33;
  text-transform: uppercase;
`;
export const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  line-height: 36px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
  color: #173d33;
  text-transform: uppercase;
`;
export const H2 = styled.h2<{ align?: string }>`
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  color: #173d33;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }
  text-align: ${(props) => props.align === "center" && props.align};
  margin-left: ${(props) => props.align === "center" && "auto"};
  margin-right: ${(props) => props.align === "center" && "auto"};
  text-transform: uppercase;
`;
export const H5 = styled.h5`
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  color: #173d33;
  text-align: center;
  text-transform: uppercase;
`;
export const DescriptionParagraph = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: justify;
  @media (min-width: 768px) {
    letter-spacing: -0.04em;
  }

  color: #173d33;
`;
export const Container = styled.div`
  @media (min-width: 360px) and (max-width: 480px) {
    max-width: 480px;
    padding: 36px 20px 0px 20px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 36px 30px 0px 30px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 24px 100px 0px 100px;
  }
`;
export const Section = styled.section`
  @media (min-width: 360px) and (max-width: 480px) {
    margin-bottom: 36px;
  }
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;
