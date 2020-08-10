import styled from 'styled-components';
import { formatMoney } from '../../libs/common';

const BasketContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 90px;
  background: white;
  border-top: 1px solid lightgray;
  padding-top: 15px;

`;

const BasketContainerButton = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 150px;
  background: white;
  border-top: 1px solid lightgray;
  padding-top: 15px;

`;
const BasketRow = styled.div`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  border-radius: .25rem;
  border: 1px solid transparent;
  padding: 15px 15px;
  text-align: center;
`;

const BasketRowButton = styled.div`
  color: #000;
  border-color: #28a745;
  border-radius: .25rem;
  border: 1px solid transparent;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  margin: 0px -15px;
`;

const Basket = (props) => {
  let totalItem = 0;
  let totalPrice = 0;
  props.baskets.forEach(item => {
    totalItem = totalItem + item.quantity;
    totalPrice = totalPrice + item.price;
  });
  return (
    <BasketContainer>
      <div className="container">
        <BasketRow>
          <div className="row">
            <div className="col">View Basket</div>
            <div className="col">{totalItem} {`Item${totalItem != 0 ? 's': ''}`}</div>
            <div className="col">{formatMoney(totalPrice)}</div>
          </div>
        </BasketRow>
      </div>
    </BasketContainer>
  );
}

const Button = (props) => {
  let totalItem = 0;
  let totalPrice = 0;
  props.baskets.forEach(item => {
    totalItem = totalItem + item.quantity;
    totalPrice = totalPrice + item.price;
  });

  return (
    <BasketContainerButton onClick={props.onClick}>
      <div className="container">
        <BasketRowButton>

            <div> Total </div>
            <div style={{fontWeight: 'bold'}}>{formatMoney(totalPrice)}</div>

        </BasketRowButton>
        <BasketRow>
          <div className="row">
            <div className="col">{props.text} </div>
          </div>
        </BasketRow>
      </div>
    </BasketContainerButton>
  );
}

export default Basket;
export {
  Button
}
