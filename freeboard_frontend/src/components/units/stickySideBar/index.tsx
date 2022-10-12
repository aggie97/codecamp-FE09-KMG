import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const StickyNav = ({ children, stuckClasses, unstuckClasses }) => {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const classes = stuck ? stuckClasses : unstuckClasses;

  useEffect(() => {
    if (!ref.current) return;
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1], rootMargin: "10x 0px 91px 0px" }
    );

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return <StickyNavigation ref={ref}>{children}</StickyNavigation>;
};

export default StickyNav;

export const StickyNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
  width: 80px;
  margin-top: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  overflow: hidden;
`;
