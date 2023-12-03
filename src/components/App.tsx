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
    const handleScroll = () => {
      if (!hover && window.scrollY > 0) {
        setHover(true);
      } else if (hover && window.scrollY === 0) {
        setHover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hover]);
  useEffect(() => {
    const body = document.body;
    if (menu.toString() === "true") {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [menu]);
  return (
    <Container>
      <div id="top"></div>
      <Header menu={menu} setMenu={setMenu} hover={hover} setHover={setHover} />
      <Main menu={menu} />
      <Footer />
    </Container>
  );
}

export default App;
