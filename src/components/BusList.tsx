import React from 'react';
import BusData from '../models/BusData';
import BusItem from './BusItem';

//passing parameters is the array of object created from the class
const BusList: React.FC <{ onBusData: BusData[]; onRemoveBus: (id: string)=> void }> = (props) => {
    return(
    <ul>
        {props.onBusData.map((item)=> (
            <BusItem key={item.id} name={item.name} paradero={item.paradero} onRemoveBus={props.onRemoveBus.bind(null, item.id)}/> //passing prop to parent again
        ))}
    </ul>
    )
}
   
export default BusList;