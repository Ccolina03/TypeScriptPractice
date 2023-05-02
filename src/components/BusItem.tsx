import React from "react";

//passing type parameters are name and paradero
const BusItem: React.FC <{name: string, paradero: string; onRemoveBus: () => void}> = (props) => { 
    //if click on List will be removed
    return (
        <>
        <ul onClick={props.onRemoveBus}> 
        <li>{props.name}</li>
        <li>{props.paradero}</li>
        </ul>
        </>
    );
};

export default BusItem;