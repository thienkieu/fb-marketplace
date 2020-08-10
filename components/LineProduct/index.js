import styled from 'styled-components'
import LineItem from './LineItem';
import SectionTitle from '../SectionTitle';

const LineProduct = ({products, title}) => (
    <>
        <div className="row">
            <SectionTitle className="col-12">
                {title}
            </SectionTitle>
        </div>
        <div className="row">
            {products.map((item, index) => {
                return <LineItem key={item._id} className="col-12" item={item} isLatest={index === products.length -1} /> ;
            })}
        </div>
    </>
);


export default LineProduct;
