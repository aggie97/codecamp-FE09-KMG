import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { stuckState } from "../../../../commons/store";
const Wrapper = ({ children }) => {
  const [stuck, setStuck] = useRecoilState(stuckState);
  const ref = useRef<HTMLDivElement | null>(null);
  console.log(stuck);
  useEffect(() => {
    if (!ref.current) return;
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1], rootMargin: "120px 0px 0px 0px" }
    );

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);
  return (
    <div style={{ textAlign: "center" }} ref={ref}>
      {children}
    </div>
  );
};

export default Wrapper;
