import styled from 'styled-components';
import Line from '../Line';

import { useState } from 'react';

const OrderItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductTitle = styled.div`
  flex-grow: 2;
  padding-left: 15px;
`;

const OrderItem = (props) => {

  return (
     <>
        <OrderItemContainer>
          <div>
            <button onClick={() => props.onShowDialogUpdateQuantity(props.item)} type="button" className="btn btn-light">Light</button>
          </div>
          <ProductTitle>Order Item</ProductTitle>
          <div> 10000đ</div>
        </OrderItemContainer>
      </>
  );
}

export default OrderItem;
