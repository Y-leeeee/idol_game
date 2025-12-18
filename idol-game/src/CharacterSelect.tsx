type CharacterSelectProps = {
  onSelect: (background: string) => void;
};

function CharacterSelect({ onSelect }: CharacterSelectProps) {
  return (
    <div>
      <h1>Choose your story</h1>
      <p>How your character started idol career?</p>

      <button onClick={() => onSelect("local_visual")}>
        Local visual legend
      </button>

      <button onClick={() => onSelect("dance_ace")}>School dance ace</button>

      <button onClick={() => onSelect("talent_show_winner")}>
        Talant show winner
      </button>

      <button onClick={() => onSelect("mixed_race")}>
        Mixed heritage beauty
      </button>

      <button onClick={() => onSelect("street_cast")}>Street casting</button>
    </div>
  );
}

export default CharacterSelect;
