import React from 'react'

const CartTableImageDisplayer = ({ mealImage, mealName, mealId }) => {
    /* 
        function to remove a cart item from cart list 
        Use meal Id and redux to remove the item from list and also update the backend 
    
        First , take a confirmation from the customer , if "YES" then proceed otherwise no
    */
    const removeMealFromCart = () => { }

    return (
        <div className="flex gap-5 h-full" >
            <img src={mealImage} className="w-[100px] h-[100px]" />
            <span className="flex flex-col" >
                <h4 className="text-2xl">{mealName}</h4>
                <button className="mt-auto text-gray-500" onClick={removeMealFromCart}>remove</button>
            </span>
        </div>
    )
}

export default CartTableImageDisplayer