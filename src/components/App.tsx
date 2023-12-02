import { useEffect, useState } from "react";
import { Container } from "../GeneralStyles.styled";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { BurgerMenu } from "./Header/BurgerMenu/BurgerMenu";
function App() {
  const [menu, setMenu] = useState(false);
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
      <Header menu={menu} setMenu={setMenu} />
      {menu && <BurgerMenu menu={menu} setMenu={setMenu} />}
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
