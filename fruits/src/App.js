import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 453,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 1352,
      name: "🥦 broccoli",
      color: "green",
      isfruit: false,
    },
    {
      id: 48683,
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: 4577,
      name: "🍍 pineapple",
      color: "yellow",
    },
  ];

  return (
    <div className="App">
      {fruits.map((fruit) => (
        <Card kry={fruits.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
