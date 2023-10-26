import React, { useState } from 'react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        recalculateTotal(updatedCart);
    };

    const recalculateTotal = (updatedCart) => {
        const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotal);
    };

    const renderCartItem = (item) => (
        <div key={item.id} className="flex items-center space-x-4 p-4 border-b border-gray-300">
            <div className="flex-shrink-0">
                <img src={item.image} alt={item.name} className="h-16 w-16" />
            </div>
            <div className="flex-1">
                <div className="text-xl font-semibold">{item.name}</div>
                <div className="text-gray-500">${item.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );

    const renderCart = () => {
        if (cartItems.length === 0) {
            return <p className="text-white">Your cart is empty.</p>;
        }

        return (
            <div className="bg-black text-white p-4">
                {cartItems.map((item) => renderCartItem(item))}
                <div className="text-right text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</div>
                <button onClick={checkout} className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-lg">
                    Checkout
                </button>
            </div>
        );
    };

    const checkout = () => {
        alert('Thank you for your purchase!');
        setCartItems([]);
        setTotal(0);
    };

    return (
        <div className="shopping-cart">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {renderCart()}
        </div>
    );
}

export default ShoppingCart;
