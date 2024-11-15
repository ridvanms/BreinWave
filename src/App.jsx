import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
const App = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">Hello </h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
