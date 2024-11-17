import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">Hello </h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits />
        <Collaboration />
        <Services />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
