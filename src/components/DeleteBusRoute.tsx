import React from "react";


const DeleteBusRoute: React.FC <{onDeleteRoute: () => (void)}> = (props) => {
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.onDeleteRoute()
    }
    
    return (
        <button onClick={handleDelete}> Delete</button>
    )
}

export default DeleteBusRoute;