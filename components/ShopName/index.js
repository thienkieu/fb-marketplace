import styled from 'styled-components';

const ShopNameContainer = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ShopName = (props) => (
  <ShopNameContainer>
    <span>{props.name}</span>
  </ShopNameContainer>
);

export default ShopName;

