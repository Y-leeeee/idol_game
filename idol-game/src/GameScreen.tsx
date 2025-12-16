import { useState } from "react";
import Stat from "./Stat";

type GameScreenProps = {
  background: string | null;
};

function GameScreen({ background }: GameScreenProps) {
  const [idolName, setIdolName] = useState("");
  const [day, setDay] = useState(1);
  const [singing, setSinging] = useState(0);
  const [dancing, setDancing] = useState(0);
  const [visuals, setVisuals] = useState(0);

  function handleDayPass() {
    setDay(day + 1);
  }
  return (
    <div>
      <h1>Create your own Kpop Idol!</h1>
      <p>Background: {background}</p>
      <label>
        Idol name:{""}
        <input value={idolName} onChange={(e) => setIdolName(e.target.value)} />
      </label>
      <p>{idolName}</p>

      <p>Day: {day}</p>
      <Stat
        name="Singing"
        value={singing}
        onIncrease={() => setSinging(singing + 1)}
      />
      <Stat
        name="Dancing"
        value={dancing}
        onIncrease={() => setDancing(dancing + 1)}
      />
      <Stat
        name="Visuals"
        value={visuals}
        onIncrease={() => setVisuals(visuals + 1)}
      />
      <button onClick={handleDayPass}>Spend a day</button>
    </div>
  );
}
export default GameScreen;
