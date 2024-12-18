"use client";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  const cursor = useRef(null);
  const position = useRef({ x: 0, y: 0 }); // Current cursor position
  const targetPosition = useRef({ x: 0, y: 0 }); // Target position for cursor to follow
  const speed = 0.1; // The speed of the cursor movement (lower value = slower movement)

  useEffect(() => {
    const moveCursor = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      const { x, y } = position.current;
      const { x: targetX, y: targetY } = targetPosition.current;

      // Move cursor towards target position with a delay
      position.current.x += (targetX - x) * speed;
      position.current.y += (targetY - y) * speed;

      // Update cursor position on the screen
      if (cursor.current) {
        cursor.current.style.left = `${position.current.x}px`;
        cursor.current.style.top = `${position.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateCursor); // Start the animation loop

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursor} className="cursor"></div>
      <main>{children}</main>
    </>
  );
}
