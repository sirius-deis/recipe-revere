import { RefObject, useEffect, useMemo, useState } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return observer.disconnect();
  }, []);

  return isIntersecting;
};

export default useOnScreen;
