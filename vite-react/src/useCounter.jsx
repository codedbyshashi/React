import { useState } from "react";

function useCounter(intialValue) {

  const[Count,SetCount] = useState(intialValue);
  
  const Increment = ()=>SetCount(Count+1);
  const Decrement = ()=>SetCount(Count-1);
  const reset = ()=>SetCount(intialValue);
  

  // pop drilling
  return {Count, Increment, Decrement,reset};
}

export default useCounter;