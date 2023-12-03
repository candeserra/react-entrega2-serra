import React from "react";

const ItemListContainer = ({greeting}) => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            {greeting}
        </div>

    )
}

export default ItemListContainer