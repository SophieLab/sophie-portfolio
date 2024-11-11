import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';

const setCSSVariables = ({
  gradientBackgroundStart,
  gradientBackgroundEnd,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  fifthColor,
  pointerColor,
  size,
  blendingValue,
}) => {
  document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
  document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
  document.body.style.setProperty("--first-color", firstColor);
  document.body.style.setProperty("--second-color", secondColor);
  document.body.style.setProperty("--third-color", thirdColor);
  document.body.style.setProperty("--fourth-color", fourthColor);
  document.body.style.setProperty("--fifth-color", fifthColor);
  document.body.style.setProperty("--pointer-color", pointerColor);
  document.body.style.setProperty("--size", size);
  document.body.style.setProperty("--blending-value", blendingValue);
};

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName
}) => {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  // Mise à jour des variables CSS
  useEffect(() => {
    setCSSVariables({
      gradientBackgroundStart,
      gradientBackgroundEnd,
      firstColor,
      secondColor,
      thirdColor,
      fourthColor,
      fifthColor,
      pointerColor,
      size,
      blendingValue,
    });
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Détecte si l'utilisateur utilise Safari
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Déplace le curseur interactif
  useEffect(() => {
    const movePointer = () => {
      if (interactiveRef.current) {
        setCurX((prev) => prev + (tgX - prev) / 20);
        setCurY((prev) => prev + (tgY - prev) / 20);
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
    };
    movePointer();
  }, [tgX, tgY]);

  // Mise à jour de la position de la souris
  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div className={cn("h-screen w-screen relative top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", containerClassName)}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>
      <div className={cn("gradients-container h-full w-full blur-lg", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]")}>
        {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map((color, index) => (
          <div
            key={index}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(${color},_0.8)_0,_rgba(${color},_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `opacity-${index === 3 ? "70" : "100"}`,
              `animate-${["first", "second", "third", "fourth", "fifth"][index]}`
            )}
          ></div>
        ))}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2",
              "opacity-70"
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
