import { useEffect, useState } from "react";

function useScrollVisibility(targetId: string, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId, rootMargin]);

  return isVisible;
}

export { useScrollVisibility };
