import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHEKCOUT</CustomButton>
  </div>
)

export default CartDropdown;
