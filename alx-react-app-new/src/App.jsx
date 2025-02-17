import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import "./App.css";
import UserContext from "./UserContext";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState("");
  return (
    <>
      <WelcomeMessage />
      <Header />
      <Counter />
      <MainContent />
      <UserContext.provider value={{ userData, setUserData }}>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </UserContext.provider>
      <Footer />
    </>
  );
}

export default App;
