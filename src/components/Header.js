import React from "react";
import { useTheme } from "../state/stateIndex";

const Header = () => {
  const { theme, updateTheme } = useTheme();
  return (
    <Header className={``}>
      <button onClick={updateTheme}></button>{" "}
    </Header>
  );
};

export { Header };
