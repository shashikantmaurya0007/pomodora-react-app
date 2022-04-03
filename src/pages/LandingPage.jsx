import React from "react";
import { useTheme } from "../state/stateIndex";
import { Header } from "../components/componentIndex";
const LandingPage = () => {
  const { theme, updateTheme } = useTheme();
  return (
    <div>
      <Header />
      <button onClick={updateTheme}>change theme</button>
    </div>
  );
};

export { LandingPage };
