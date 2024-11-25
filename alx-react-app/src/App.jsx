import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
