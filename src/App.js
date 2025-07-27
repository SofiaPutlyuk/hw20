import { useCounter } from "./components/useCounter";
import "./App.css"
function App() {
  const { count, increment, decrement, reset } = useCounter(10)
  return (
    <div className="counter-container">
      <h1>Лічильник:{count}</h1>
      <div className="counter-buttons">
      <button onClick={increment}>Збільшити</button>
      <button onClick={decrement}>Зменшити</button>
      <button onClick={reset}>Скинути</button>
      </div>
    </div>
  );
}

export default App;
