import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <About />
      <Shop />
      <Contact />
    </div>
  );
}