import { useEffect, useRef } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const { position, isHovering } = useCursor();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    if (!cursor || !cursorGlow) return;

    cursor.style.left = `${position.x - 10}px`;
    cursor.style.top = `${position.y - 10}px`;
    cursorGlow.style.left = `${position.x - 20}px`;
    cursorGlow.style.top = `${position.y - 20}px`;

    cursor.style.transform = isHovering ? 'scale(1.5)' : 'scale(1)';
    cursorGlow.style.transform = isHovering ? 'scale(1.2)' : 'scale(1)';
  }, [position, isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed pointer-events-none z-[9999] hidden md:block"
        data-testid="custom-cursor"
      />
      <div
        ref={cursorGlowRef}
        className="cursor-glow fixed pointer-events-none z-[9998] hidden md:block"
        data-testid="cursor-glow"
      />
    </>
  );
}
