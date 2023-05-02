import React from "react";

//passing type parameters are name and paradero
const BusItem: React.FC <{name: string, paradero: string}> = (props) => { 
    
    return (
        <>
        <li>{props.name}</li>
        <li>{props.paradero}</li>
        </>
    );
};

export default BusItem;