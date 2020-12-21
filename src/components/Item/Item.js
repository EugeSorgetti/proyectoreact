import React, {Component, useState} from 'react';
import {render} from 'react-dom';


let promesa = new Promise ((resolver, rechazar) =>{

    setTimeout(() => {

    }, 2000)
});

promesa
.then((resultado)=>{
    Item();
})

function Item() {

    const [productos, setProductos] = useState([
        {id: 1, name: "Media docena de clásicos"},
        {id: 2, name: "Media docena de premium"},
    ])
    
    return <ul className="products">
        {productos.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
}

render (<Item/>, document.getElementById('root'));
export default Item;