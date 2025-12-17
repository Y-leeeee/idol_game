import { useState } from "react";
import Stat from "./Stat";

type GameScreenProps = {
  background: string | null;
};

const backgroundBonus: Record<
  string,
  { singing?: number; dancing?: number; visuals?: number }
> = {
  dance_ace: { dancing: 2 },
  local_visual: { visuals: 2 },
  talent_show_winner: { singing: 2 },
  mixed_heritage: { visuals: 1, singing: 1 },
  street_cast: { visuals: 1 },
};

function GameScreen({ background }: GameScreenProps) {
  const bonus = background ? backgroundBonus[background] ?? {} : {};
  const [idolName, setIdolName] = useState("");
  const [day, setDay] = useState(1);

  const [singing, setSinging] = useState(() => bonus.singing ?? 0);
  const [dancing, setDancing] = useState(() => bonus.dancing ?? 0);
  const [visuals, setVisuals] = useState(() => bonus.visuals ?? 0);

  function handleDayPass() {
    setDay((d) => d + 1);
  }

  return (
    <div>
      <h1>Create your own KPOP idol star</h1>
      <p>Background: {background}</p>
      <label>
        Idol name:
        <input value={idolName} onChange={(e) => setIdolName(e.target.value)} />
      </label>
      <p>{idolName}</p>
      <p>Day: {day}</p>
      <Stat
        name="Singing"
        value={singing}
        onIncrease={() => setSinging((v) => v + 1)}
      />
      <Stat
        name="Dancing"
        value={dancing}
        onIncrease={() => setDancing((v) => v + 1)}
      />
      <Stat
        name="Visuals"
        value={visuals}
        onIncrease={() => setVisuals((v) => v + 1)}
      />

      <button onClick={handleDayPass}>Spend a day</button>
    </div>
  );
}

export default GameScreen;
