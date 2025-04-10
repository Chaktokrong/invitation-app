"use client";
import { useState, useRef, useEffect } from "react";
import { Fireworks } from "fireworks-js";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
//Srcs
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [showFireworks, setShowFireworks] = useState(true);
  const fireworksRef = useRef(null);

  useEffect(() => {
    if (fireworksRef.current) {
      const fireworks = new Fireworks(fireworksRef.current, {
        hue: { min: 0, max: 360 },
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        explosion: 5,
        traceLength: 3,
        traceSpeed: 5,
        intensity: 40,
        flickering: 50,
        lineWidth: { min: 1, max: 2 },
      });

      fireworks.start();

      // Stop fireworks after 3 seconds
      setTimeout(() => {
        fireworks.stop();
        setShowFireworks(false);
      }, 4000);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {showFireworks && (
          <div
            ref={fireworksRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "transparent",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}

        <ChakraProvider>
          <div className="layout-container">
            <Box className="box-container">
              <Box className="img-container">{children}</Box>
            </Box>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
