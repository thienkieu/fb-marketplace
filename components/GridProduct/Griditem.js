import styled from 'styled-components';
import Link from 'next/link';
const ProductImage = styled.img`
    width: 100%;
    border-radius: 5px;
`;

const ProductPrice = styled.div`
    padding-bottom: 20px;
    font-weight: bold;
`;

const ProductTitle = styled.div`
    padding-top: 10px;
    min-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    a {
        color: #000;
    }
`;

const Griditem = ({item, className}) => {
    return (
        <div className={className}>
            <Link href={`/product/${item.id}`}><ProductImage src={item.imageUrl} /></Link>
            <ProductTitle><Link href={`/product/${item.id}`}>{item.title}</Link></ProductTitle>
            <ProductPrice>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'  }).format(100000)}</ProductPrice>
        </div>
    )
}

export default Griditem;