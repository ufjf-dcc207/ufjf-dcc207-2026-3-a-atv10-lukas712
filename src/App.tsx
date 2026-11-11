import { useState } from 'react';
import './App.css';

import Bottle, { type BottleType } from './Bottle';

const initialBottles: BottleType[] = [
  { vecFill: [0, 1, 2], maxSize: 4 },
  { vecFill: [1, 2], maxSize: 3 },
  { vecFill: [3, 3, 0], maxSize: 5 },
  { vecFill: [], maxSize: 4 },
];



function App() {
  const [selectedBottle, setSelectedBottle] = useState<number | null>(null);
  const [bottles, setBottles] = useState<BottleType[]>(initialBottles);

  function ableToTransfer(origin: BottleType, destination: BottleType): boolean {
    if (origin.vecFill.length === 0) return false;
    if (destination.vecFill.length >= destination.maxSize) return false;

    return destination.vecFill.length === 0 ||
      origin.vecFill[origin.vecFill.length - 1] ===
      destination.vecFill[destination.vecFill.length - 1];
  }

  function transferLiquid(origin: number, destination: number): void {
    setBottles(atual => {
      const newBottles = atual.map(b => ({
        ...b,
        vecFill: [...b.vecFill]
      }));

      if (ableToTransfer(newBottles[origin], newBottles[destination])) {
        const color = newBottles[origin].vecFill.pop()!;
        newBottles[destination].vecFill.push(color);
      }

      return newBottles;
    });
  }

  function selectBottle(index: number): void {
    if (selectedBottle === null) {
      setSelectedBottle(index);
    } else {
      transferLiquid(selectedBottle, index);
      setSelectedBottle(null);
    }
  }

  return (
    <div className="app">
      {bottles.map((bottle, index) => (
        <div key={index}>
          <Bottle bottle={bottle} />

          <button onClick={() => selectBottle(index)}>
            {selectedBottle === index ? "Selecionada" : "Selecionar"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;