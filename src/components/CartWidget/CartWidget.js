import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div className="cartIcon">
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
    );
}

export default CartWidget;