import React from "react";

import "./cart-dropdown.styles.scss";

import CustumButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item"></div>
        <CustumButton >GO TO CHECKOUT</CustumButton>

    </div>
)

export default CartDropdown;