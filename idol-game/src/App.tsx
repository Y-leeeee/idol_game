import "./App.css";
import { useState } from "react";

function App() {
  const [singing, setSinging] = useState(0);
  const [dancing, setDancing] = useState(0);
  const [visuals, setVisuals] = useState(0);
  const [idolName, setIdolName] = useState("");
  const [day, setDay] = useState(1);

  function handleDayPass() {
    setDay(day + 1);
    const rand = Math.floor(Math.random() * 3);

    if (rand === 0 && singing < 100) {
      setSinging(singing + 1);
    } else if (rand === 1 && dancing < 100) {
      setDancing(dancing + 1);
    } else if (rand === 2 && visuals < 100) {
      setVisuals(visuals + 1);
    }
  }

  return (
    <>
      <h1>Create your own KPOP idol!</h1>
      <label>
        Idol name :{" "}
        <input
          value={idolName}
          onChange={(event) => setIdolName(event.target.value)}
        />
      </label>
      <p>{idolName ? `${idolName}'s stats` : "Stats"}</p>
      <p>Day : {day}</p>
      <div>
        <h3>Singing</h3>
        <p>{singing}</p>
        <button onClick={() => singing < 100 && setSinging(singing + 1)}>
          +
        </button>
      </div>
      <div>
        <h3>Dancing</h3>
        <p>{dancing}</p>
        <button onClick={() => dancing < 100 && setDancing(dancing + 1)}>
          +
        </button>
      </div>
      <div>
        <h3>Visuals</h3>
        <p>{visuals}</p>
        <button onClick={() => visuals < 100 && setVisuals(visuals + 1)}>
          +
        </button>
      </div>
      <button onClick={handleDayPass}>Spend a day(random skill +1)</button>
    </>
  );
}

export default App;
