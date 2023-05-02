import React from "react";
import { useState } from "react";
import NewBusRoute from "./components/NewBusRoute";
import BusData from "./models/BusData";
import BusList from "./components/BusList";
import DeleteBusRoute from "./components/DeleteBusRoute";

function App() {

  const [busList, setBusList] = useState<BusData[]>([]) //manage busList employing the class as a an array of type of this class
  
  //passing parameter is the ones passed from child to parent
  const AddRouteHandler = (name: string, paradero: string) => { //given parameters from Bus Routes definition
   const newBus = new BusData(name, paradero) //passing arguments data to update busList
   setBusList( (busList) => [...busList, newBus]); //updating using spread operator
   }

   const DeleteRouteHandler = () => {
      const newBusList = [...busList]
      newBusList.pop();
      setBusList(newBusList);
   }


  return (
    <div>
      <NewBusRoute onAddRoute={AddRouteHandler} /> 
      <DeleteBusRoute onDeleteRoute={DeleteRouteHandler}/>
      <BusList onBusData={busList}/>
    </div>
  );
}

export default App;
