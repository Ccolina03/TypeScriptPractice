import React, { FormEvent } from "react";
import { useRef } from "react";

//passing parameters is the function to pass to the parent
const NewBusRoute: React.FC <{onAddRoute: (name: string, paradero: string) => void }> = (props) => { //Add Route Handler format defined here
  const nameInput = useRef<HTMLInputElement>(null);
  const nameParadero = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText1 = nameInput.current!.value; //value will exist
    const enteredText2 = nameParadero.current!.value;

    if (enteredText1.trim().length === 0|| enteredText2.trim().length === 0) {
      return
    }
    props.onAddRoute(enteredText1, enteredText2)
  }
  


return (
  <form onSubmit={submitHandler}>
    <input name = "name" type="text" id='name' placeholder="Enter Bus Name" ref={nameInput}></input>
    <input name = "paradero" type="text" placeholder="Enter Bus Paradero" ref={nameParadero}></input>
    <button type='submit'>Add</button>
  </form>
  
)
}
export default NewBusRoute;
