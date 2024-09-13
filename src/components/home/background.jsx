/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import BIRDS from "vanta/dist/vanta.birds.min";
import DOTS from "vanta/dist/vanta.dots.min";
import TRUNK from "vanta/dist/vanta.trunk.min";
import p5 from "p5";
import HeroSection from "./heroSection";
import "../../assets/styles/home/heroSection.css";

function Background() {
  const vantaRef = useRef(null);
  const animationInstance = useRef(null);

  const getRandomAnimation = () => {
    const animations = ["BIRDS", "DOTS", "WAVES", "TRUNK"];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  const initVantaEffect = () => {
    const randomAnimation = getRandomAnimation();

    switch (randomAnimation) {
      case "BIRDS":
        animationInstance.current = BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x333333,
          color1: 0x1c00ff,
          colorMode: "lerpGradient",
          birdSize: 1.9,
          wingSpan: 26.0,
          separation: 64.0,
          alignment: 24.0,
          cohesion: 100.0,
        });
        break;
      case "DOTS":
        animationInstance.current = DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          color: 0x202eff,
          color2: 0x2063ff,
          scaleMobile: 1.0,
        });
        break;
      case "TRUNK":
        animationInstance.current = TRUNK({
          el: vantaRef.current,
          p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          color: 0x456798,
          chaos: 0.5,
          scaleMobile: 1.0,
        });
        break;
      case "WAVES":
        animationInstance.current = WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 900.0,
          scale: 1.0,
          color: 0x81a4f,
          shininess: 35.0,
          waveHeight: 9.0,
          scaleMobile: 1.0,
        });
        break;
    }
  };

  useEffect(() => {
    if (vantaRef.current) {
      initVantaEffect();
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="background">
      <HeroSection />
    </div>
  );
}

export default Background;
