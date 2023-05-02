import React from 'react';
import BusData from '../models/BusData';
import BusItem from './BusItem';

//passing parameters is the array of object created from the class
const BusList: React.FC <{ onBusData: BusData[]}> = (props) => {
    return(
    <ul>
        {props.onBusData.map((item)=> (
            <BusItem key={item.id} name={item.name} paradero={item.paradero}/>
        ))}
    </ul>
    )
}
   
export default BusList;