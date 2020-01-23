import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector"; 
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustumButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";


const CartDropdown = ({cartItems , history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            :
            <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustumButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
            }} >GO TO CHECKOUT</CustumButton>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));