import styled from 'styled-components';

const Gap = styled.div`
    height: ${props => props.height ?  props.height: '10px'};
    background: ${props => props.background ?  props.background: 'lightgray'};
    width: 100%;
    margin: ${props => props.margin ?  props.margin: '30px 0px'};
`;

export default Gap;
