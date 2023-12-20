import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const cartItemsCount = 5;

    return (
        <div>
            <FaShoppingCart style={{ fontSize: '24px', marginRight: '5px' }} />
            <span>{cartItemsCount}</span>
        </div>
    );
};

export default CartWidget;