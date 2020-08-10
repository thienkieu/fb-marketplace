import styled from 'styled-components';

const Line = styled.hr`
    width:100%;
    border-top: ${(props) => props.border ? props.border: '1px solid lightgray'};
    height: 1px;
    margin: ${props => props.margin ? props.margin : '30px 0px'};
`;

export default Line;
