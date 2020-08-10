import styled from 'styled-components';
import Map from '../../components/Map';
import DistanceLocation from '../../components/DistanceLocation';
import Line from '../../components/Line';
import Gap from '../../components/Gap';
import FullWidthLayout from '../layouts/FullWidthLayout';
import OrderList from '../../components/OrderList';
import CommonModal from '../../components/Modal';
import { Button } from '../../components/Basket';
import baskets from '../../data/baskets';
import { formatMoney } from '../../libs/common';
import Example from '../../components/Carousel';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  background: lightgray;
  padding: 15px;
  font-size: 1.5rem;
`;

const PreviewLocation = styled.div`
  height: 100px;
  width: 100px;
`
const LocationInfo = styled.div`
  font-weight: bold;
  font-size: 1rem;
  flex-grow: 2;
  padding-left: 15px;
  align-self: center;

`;

const ChangeLocationIcon = styled.div`
  align-self: flex-end;
`

const LocationSection = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: center;
`;

const EstimationTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
`
const OrderDetails = (props) => {
  const onUpdateBasketItem = (item) => {
    console.log(item);
  }

  return (
    <FullWidthLayout>
      <div className="container">
        <div className="row">
          <HeaderSection className="col">
            <div>Deliver To</div>
            <div>Change address</div>
          </HeaderSection>
        </div>
        <LocationSection>
          <PreviewLocation>
            <Map lat={16.034570} lng={108.221919} height="100px"/>
          </PreviewLocation>
          <LocationInfo>
            11 Tố Hữu
          </LocationInfo>
          <ChangeLocationIcon>
            <svg fill="#000000"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z"/></svg>
          </ChangeLocationIcon>
        </LocationSection>


        <Line margin="15px 0px"/>
        <EstimationTimeSection>
          <div>
            <div>Deliver time</div>
            <DistanceLocation format={(distanceValue, estimationTimeg) => {
              return <span>{`Deliver Now (${estimationTimeg})`}</span>
            }} source={{lat:16.036684, lng:108.218233}} />
          </div>
          <div>
            <a href="/">Change time</a>
          </div>
        </EstimationTimeSection>
        <Gap height="1px" background="white" margin="10px 0px"/>
        <div className="row">
          <HeaderSection className="col">
            <div>Order Summary</div>
            <div>Add Items</div>
          </HeaderSection>
        </div>
        <div>
          <Line height="0px" border="1px solid white" margin="5px 0px"/>
          <OrderList onUpdateBasketItem={onUpdateBasketItem} items={baskets} />
        </div>
      </div>
      <div className="container">
        <Example />
      </div>
      <Gap height="85px" background="white"/>
      {baskets && <Button text="Place order" baskets={baskets} />}

    </FullWidthLayout>
  )
}

export default OrderDetails;
