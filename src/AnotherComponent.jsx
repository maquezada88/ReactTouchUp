import React, {useState} from 'react'

function AnotherComponent(){
    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(0);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping, setShipping] = useState("")

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleNameChange(e){
        setName(e.target.value);
    }

    return(

        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter address"/>
            <p>Comment: {comment}</p>

            <select value = {payment}  onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
                Pick up
            </label><br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );

}

export default AnotherComponent;