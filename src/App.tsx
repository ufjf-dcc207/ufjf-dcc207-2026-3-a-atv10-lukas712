import { useState } from 'react'
import './App.css'
import Bottle, { type BottleType } from './Bottle'
import { transferLiquid } from './Logic'

const bottles: BottleType[] = [
  {vecFill: [0, 1], maxSize: 4}, 
  {vecFill: [1, 0], maxSize: 4},
  {vecFill: [1,1,0], maxSize: 4},
  {vecFill: [], maxSize: 4}
]

function App() {
  const [bottle, setBottles] = useState<BottleType[]>(bottles);
  const [selected, setSelected] = useState<number | null>(null);
  
  function bottleSelected(index: number) {
    if(selected === null){
        setSelected(index);
    }
    else {
      const newBottles = transferLiquid(bottle, selected, index);  
      setBottles(newBottles);
      setSelected(null);
    }
  }

  const bottleElements = [];
  for (let i = 0; i < bottle.length; i++) {
    bottleElements.push(<Bottle key={i} index={i} bottle={bottle[i]} selected={selected ===i} onClick={bottleSelected}></Bottle>);
  }
  return (<div>
    {bottleElements}
  </div>)
}

export default App