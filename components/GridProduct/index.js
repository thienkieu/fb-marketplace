import styled from 'styled-components'
import GridItem from './GridItem';
import SectionTitle from '../SectionTitle';

const GridProduct = ({products}) => (
    <>  
        <div className="row">
            <SectionTitle className="col-12">
                Best seller you'll like
            </SectionTitle>
        </div>
        <div className="row">
            {products.map(item => {
                return <GridItem key={item.id} className="col-6 col-md-3" item={item} /> ;
            })}
        </div>
    </>
);

export default GridProduct;
