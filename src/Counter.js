import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

const handleChangeNumber = (event) =>{
  console.log("Number")
 setCount(Number(event.target.value))
}
  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <input type="number"   onChange={handleChangeNumber} />
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      
    </div>
  );
}

export default Counter;
