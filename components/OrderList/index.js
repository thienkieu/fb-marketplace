import styled from 'styled-components';
import Line from '../Line';
import OrderItem from './orderItem';
import CommonModal from '../Modal';
import { Button,  Input } from 'reactstrap';
import { useState } from 'react';


const QuantityContainer = styled.div`
  display:flex;
  justify-content: center;
`;

const UpdateBasketContainer = styled.div`
  display: flex;
  justify-content: center;
`;


const InputQuantity = styled.input`
  width: 70px;
  text-align: center;
`;

const QuantityButton = styled.button`
  ${QuantityContainer} & {
    color: ${props => props.color ? props.color : 'black'};
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0px  10px;
    min-width: 40px;
  }
`;

const InputInstructionContainer= styled.div`

`;
const InputInstruction = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid green;
  border-radius: 7px;
  outline-color: green;
  margin-bottom: 15px;
}
`;

const OrderList = (props) => {
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentItem, setCurrentItem] = useState({});


  const onShowDialogUpdateQuantity = (orderItem) => {
    setQuantity(orderItem.quantity);
    setModal(!modal);
    setCurrentItem(orderItem);
  }

  const onIncreaseQuantity = () => {
    setQuantity(quantity +1);
  }

  const onDecreaseQuantity = () => {
    setQuantity(quantity -1);
  }

  const toggle = () => {
    setModal(!modal);
  }

  const onUpdateBasketItem = () => {
    setModal(!modal);
    const newItem = {
      ...currentItem,
      quantity,
      instruction,
    };

    props.onUpdateBasketItem(newItem);
  }

  const [instruction, setTnstruction] = useState('');
  const onEnterInstruction = (event) => {
    setTnstruction(event.target.value);
  }

  const items = props.items.map(item => <div><OrderItem onShowDialogUpdateQuantity={onShowDialogUpdateQuantity} item={item} /> <Line margin="5px: 0px"/></div>);


  console.log(quantity);
  return (
      <>
        <div>{items}</div>
        <CommonModal isOpen={modal} title="Update quantity" toggle={toggle}>
            <InputInstructionContainer>
              <div>Không yêu cầu</div>
              <InputInstruction   type="text" className="form-control" value={instruction} onChange={onEnterInstruction} />
            </InputInstructionContainer>
            <QuantityContainer>
              <QuantityButton type="button" className="btn btn-light" onClick={onDecreaseQuantity} disabled={quantity > 1 ? false: true}>
                <svg height="24px" viewBox="0 -192 469.33333 469" width="24px" fill="green"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/></svg>
              </QuantityButton>
              <InputQuantity type="number" disabled value={quantity}/>
              <QuantityButton type="button" color="green" className="btn btn-light" onClick={onIncreaseQuantity}>
                <svg fill="green" height="24px" viewBox="0 0 448 448" width="24px"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
              </QuantityButton>

            </QuantityContainer>
            <UpdateBasketContainer>
              <button type="button" onClick={onUpdateBasketItem} style={{ width: '250px', padding: '10px', marginTop: '15px' }} class="btn btn-success">Success</button>
            </UpdateBasketContainer>

        </CommonModal>
      </>
  )
}

export default OrderList;
