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

const backgroundStory: Record<string, string> = {
  dance_ace: "You trained as a dance ace since childhood.",
  local_visual: "You became famous for your visuals in your local area.",
  talent_show_winner: "You won a national talent show.",
  mixed_heritage: "Your unique heritage made you stand out.",
  street_cast: "You were cast on the street by a scout.",
};

const dayEvent: Record<number, string> = {
  3: "You passed your first evaluation.",
  5: "You gained your first small fanbase!",
  7: "A trainee video went viral.",
};

function GameScreen({ background }: GameScreenProps) {
  const bonus = background ? backgroundBonus[background] ?? {} : {};
  const story = background ? backgroundStory[background] : "";
  const [idolName, setIdolName] = useState("");
  const [day, setDay] = useState(1);
  const [actionUsed, setActionUsed] = useState(false);

  const [singing, setSinging] = useState(() => bonus.singing ?? 0);
  const [dancing, setDancing] = useState(() => bonus.dancing ?? 0);
  const [visuals, setVisuals] = useState(() => bonus.visuals ?? 0);

  function handleDayPass() {
    setDay((d) => d + 1);
    setActionUsed(false);
  }

  return (
    <div>
      <h1>Create your own KPOP idol star</h1>
      <p>Background: {background}</p>
      <p>{story}</p>
      {dayEvent[day] && <p>{dayEvent[day]}</p>}
      {actionUsed && <p>You already trained today.</p>}
      <label>
        Idol name:
        <input value={idolName} onChange={(e) => setIdolName(e.target.value)} />
      </label>
      <p>{idolName}</p>
      <p>Day: {day}</p>
      <Stat
        name="Singing"
        value={singing}
        onIncrease={() => {
          if (actionUsed) return;
          setSinging((v) => v + 1);
          setActionUsed(true);
        }}
      />
      <Stat
        name="Dancing"
        value={dancing}
        onIncrease={() => {
          if (actionUsed) return;
          setDancing((v) => v + 1);
          setActionUsed(true);
        }}
      />
      <Stat
        name="Visuals"
        value={visuals}
        onIncrease={() => {
          if (actionUsed) return;
          setVisuals((v) => v + 1);
          setActionUsed(true);
        }}
      />

      <button onClick={handleDayPass}>Spend a day</button>
    </div>
  );
}

export default GameScreen;
