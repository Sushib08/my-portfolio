import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnime = ({ className, sequence, wrapper, speed, repeat }) => {
  return (
    <TypeAnimation
      className={className} // Utilisation de la prop className
      sequence={sequence} // Utilisation de la prop sequence
      wrapper={wrapper} // Utilisation de la prop wrapper
      speed={speed} // Utilisation de la prop speed
      repeat={repeat} // Utilisation de la prop repeat
    />
  );
};

export default TextAnime;
