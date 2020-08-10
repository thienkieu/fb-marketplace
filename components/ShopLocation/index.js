import styled from 'styled-components';

const ShopAddressLable = styled.div`
  font-weight: bold;
`;

const ShopLocationAddress = (props) => (
  <div className="row">
    <ShopAddressLable className="col-4">Location</ShopAddressLable>
    <div className="col-8">19 Tien Son 10, quận Hải Châu, TP Đà Nẵng</div>
  </div>
);

export default ShopLocationAddress;
