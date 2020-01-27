import React from "react";
import StripeCheckout from "react-stripe-checkout"

const SrtipeCheckoutButton = ({price}) => {

    const priceForStipe = price * 100;
    const publishableKey =  "pk_test_9rY7Ah5jsNxgu9JnFIXpnyv200M9BLWOnv";

    const onToken = token => {
        console.log(token);
        alert("success!")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name ="CRWN Clouthing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description = { `Your total is $${price}`}
            amount = {priceForStipe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey ={publishableKey}
        />
    )
};


export default SrtipeCheckoutButton;