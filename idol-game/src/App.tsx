import { useState } from "react";
import "./App.css";
import CharacterSelect from "./CharacterSelect";
import GameScreen from "./GameScreen";

function App() {
  const [stage, setStage] = useState<"select" | "game">("select");
  const [background, setBackground] = useState<string | null>(null);

  if (stage === "select") {
    return (
      <CharacterSelect
        onSelect={(bg) => {
          setBackground(bg);
          setStage("game");
        }}
      />
    );
  }
  return <GameScreen background={background} />;
}

export default App;
