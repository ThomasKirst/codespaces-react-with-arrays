import "./Card.css";

export default function Card({ name, color }) {
  return <p className={`Card Card--${color}`}>{name}</p>;
}
