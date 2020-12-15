import React from 'react';


const ItemCount = () => {

    const [counter, setCounter] = React.useState(0);
    const [date, setDate] = React.useState("");

    const addNumber = () =>  {
        setCounter (counter+1)
      }
    
    const substractNumber = () => {
        setCounter (counter-1)
    }
    
    const lastClick = () => {
        setDate (new Date().toLocaleString());
    }

    return(
        <div className="counter">
        <p>Cantidad de clicks: {counter}</p>
        <p>Último click: {date}</p>
        <button onClick={ () => {
            addNumber()
            lastClick()
        }}>+</button>
        <button onClick={ () => {
            substractNumber()
            lastClick()
        }}>-</button>
        </div>
    )
}

export default ItemCount