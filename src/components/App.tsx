import { useEffect, useState } from "react";
import { Container } from "../GeneralStyles.styled";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
function App() {
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setHover(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setHover(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Header menu={menu} setMenu={setMenu} hover={hover} setHover={setHover} />
      <Main menu={menu} />
      <Footer />
    </Container>
  );
}

export default App;
