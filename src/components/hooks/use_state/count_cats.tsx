import { useState } from "react";

export function CountCats() {

  const [catNumber, setCatNumber] = useState(0)

  function increaseCats(){
    setCatNumber(catNumber + 1)
  }

  return (
    <>
    <h2>useState</h2>

    <p>{catNumber > 0 ? catNumber + " 🐈" : catNumber}</p>

    <button onClick={increaseCats}>
      There are ... cats 🥳
    </button>
    </>
  );
}