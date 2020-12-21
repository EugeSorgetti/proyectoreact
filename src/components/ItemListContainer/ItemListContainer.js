import React from 'react';
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {
    console.log (props.titulo);
    return (
    <div className="bienvenida">
        <h1>{props.titulo}</h1>
        <ItemList></ItemList>
    </div>
    )
}

export default ItemListContainer;