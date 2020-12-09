import React from 'react';

const ItemListContainer = (props) => {
    console.log (props.titulo);
    return (
    <div className="bienvenida">
        <h1>{props.titulo}</h1>
    </div>
    )
}

export default ItemListContainer;