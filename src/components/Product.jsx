import React from 'react'

function Product(props) {
    const { id, name, price, productImage } = props.data
    return (
        <div>
            <span className="font-bold text-lg text-white">{name}</span>
            <br />
            <span className=" text-mustard">Subtotal: ${price}</span>
        </div>
    )
}

export default Product
