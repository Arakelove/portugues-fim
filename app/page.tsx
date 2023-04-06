'use client';
import React  from "react";
import "./styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider, useTheme} from "./providers/ThemeProvider";
import App from "./App";


export default function Home() {
  const { theme } = useTheme();
  console.log(theme)
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

