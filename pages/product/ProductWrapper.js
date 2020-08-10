import styled from 'styled-components';
export const ProductTitle = styled.div`
  padding-top: 20px;
  font-weight: bold;
  font-size: 16px;
`;
export const ProductPrice = styled.div`
  font-weight: bold;
  padding-top: 20px;
  text-align: right;
  font-size: 16px;
`;
export const ProductDesciption = styled.div`
  color: #333;
  padding-top: 15px;    
`;

export const NoteLabel = styled.div`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
export const OptionalLabel = styled.span`
  font-weight: normal;
  font-size: 10px;
  margin-left: 8px;
`;
export const NoteContent = styled.span`
  border: 1px solid #F6F6F6;
  margin: 20px -15px;
  padding: 15px;
  display: block;
`;
export const SpecialNote = styled.div`  
  
`;
export const Quantily = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .quantity-input__screen {
    width: 80px;
    float: left;
    text-align: center;
    border: none;
    font-weight: bold;
    font-size: 24px;    
    &[readonly] {
        background-color: transparent;
    }
  }

  .quantity-input__modifier {
    float: left;
    background: none;
    color: #00B14F;
    font-weight: bold;
    font-size: 40px;
    padding: 0;
    height: 50px;
    line-height: 1;
    width: 50px;
    padding-bottom: 6px;
  }
`;

export const AddtoCard = styled.div`
  border: 1px solid #F6F6F6;
  padding: 15px 15px 5px;
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
`;