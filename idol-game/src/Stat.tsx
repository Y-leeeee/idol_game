type StatProps = {
  name: string;
  value: number;
  onIncrease: () => void;
};

function Stat({ name, value, onIncrease }: StatProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{value}</p>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default Stat;
