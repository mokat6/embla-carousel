import { useState } from "react";

import EmblaCarousel from "./components/EmblaCarousel";
import { type EmblaOptionsType } from "embla-carousel";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";

function App() {
  const [count, setCount] = useState(0);

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default App;
