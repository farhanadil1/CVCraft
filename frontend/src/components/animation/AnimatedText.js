import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedText = ({
  text = "",
  delay = 150,
  animateBy = "words",
  direction = "top",
  className = "",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const from = direction === "top"
    ? { opacity: 0, y: -50, filter: "blur(10px)" }
    : { opacity: 0, y: 50, filter: "blur(10px)" };

  const to = { opacity: 1, y: 0, filter: "blur(0px)" };

  const gradientStyle = {
    background: "linear-gradient(90deg, #1F2937 0%, #58759D 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    backgroundSize: "100%",
  };

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block leading-tight"
          style={gradientStyle} // gradient applied on each word
          initial={from}
          animate={inView ? to : from}
          transition={{ delay: (index * delay) / 1000, duration: 0.5 }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
        >
          {segment}
          {animateBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedText;
