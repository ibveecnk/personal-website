import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { rgbToHex, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { useEffect } from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Background parameters
  const PIXELSIZE = 20,
    LIGHTRADIUS = 300,
    STEP = 0.2;

  let mouseX: number, mouseY: number;
  let mouseOver = true;

  let colorOffset = 0;

  let numTilesX: number,
    numTilesY: number,
    tileWidthX: number,
    tileWidthY: number;

  const setCanvasDimensions = () => {
    const canvas = document.getElementById("background") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx || !window.visualViewport) return;

    canvas.width = window.window.innerWidth;
    canvas.height = window.window.innerHeight;

    numTilesX = Math.ceil(canvas.width / PIXELSIZE);
    numTilesY = Math.ceil(canvas.height / PIXELSIZE);

    tileWidthX = canvas.width / numTilesX;
    tileWidthY = canvas.height / numTilesY;
  };

  const draw = () => {
    const canvas = document.getElementById("background") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx || !window.visualViewport) return;

    colorOffset += STEP;

    for (let i = 0; i < numTilesX; i++) {
      for (let j = 0; j < numTilesY; j++) {
        let tileDistanceToMousePointer = Math.sqrt(
          (i * tileWidthX - mouseX) ** 2 + (j * tileWidthY - mouseY) ** 2
        );

        let tileBrightness =
          mouseOver &&
          !!tileDistanceToMousePointer &&
          mouseX !== null &&
          mouseY !== null
            ? (30 * (LIGHTRADIUS - tileDistanceToMousePointer)) / LIGHTRADIUS
            : 0;
        tileBrightness <= 0 ? (tileBrightness = 0) : null;
        tileBrightness += 20; // minimum brightness

        let color = `hsl(${
          Math.cos((i + j) / 2 + colorOffset) * 20 + 238
        }, 60%, ${tileBrightness}%)`;

        ctx.fillStyle = color;
        ctx.fillRect(i * tileWidthX, j * tileWidthY, tileWidthX, tileWidthY);
      }
    }
    ctx.stroke();
  };

  const initCanvas = () => {
    setCanvasDimensions();
    const wrapper = document.getElementById("contentWrapper") as HTMLDivElement;

    wrapper.addEventListener("mouseleave", () => {
      mouseOver = false;
    });
    wrapper.addEventListener("mouseenter", () => {
      mouseOver = true;
    });

    window.addEventListener("resize", setCanvasDimensions);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    setInterval(draw, 1000 / 24); // 24 fps
  };

  // Ugly workaround, sorry
  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      initCanvas();
      ignore = true;
    }
  });

  return (
    <>
      <div id="contentWrapper">
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>

        <canvas
          id="background"
          style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        >
          Canvas is not supported in your browser.
        </canvas>
      </div>
    </>
  );
}
