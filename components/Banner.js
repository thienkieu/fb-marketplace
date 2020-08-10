import styled from 'styled-components';
const BanerImage = styled.div`
    width: 100%;
    max-width: 100%;
    height: 150px;
    background-image: url("${props => props.src}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;
const Banner = (props) => (
    <div>
        <BanerImage src={props.url}/>
    </div>
)

export default Banner;
