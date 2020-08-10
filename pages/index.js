import Head from 'next/head'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { withTranslation } from '../i18n'
import FullWidthLayout from './layouts/FullWidthLayout';
import LineProduct from '../components/LineProduct';
import AppRouter from '../app-router';
import Gap from '../components/Gap';
import AppConstant from '../app-constant';
import fetch from 'node-fetch'
import Line from '../components/Line';
import Link from 'next/link';

const ShopName = styled.div`
  padding: 10px 0px;
  font-size: 2rem;
`;

const PageItemNumber = styled.span`
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  opacity: 0.8;
  background: green;
  color: white;
  border-radius: 5px;

  &: hover {
    opacity: 1;
  }
`;
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Home = ({t}) => {

  const router = useRouter();
  const showShowInfo = (e) => {
    e.preventDefault();
    router.push(AppRouter.shopInfo);
  };


  const [facebookId, setFacebookId] = useState('');
  const onChangeFacebookAccount = (value) => {
    setFacebookId(value);
    setPageNumber(1);
    getProducts(value);
  }

  const [pageNumber, setPageNumber] = useState(1);
  const onChangePage = (number) => {
    console.log(number);
    setPageNumber(number);
    getProducts(facebookId, number);
  }

  const [enableSearch, setEnableSearch] = useState(false);
  const clickEnableSearch = () => {
    setEnableSearch(true);
  }
  const clickDisableSearch = () => {
    setEnableSearch(false);
    getProducts();
  }

  const groupProductByFacebookId = (products) => {
    const fbIds = {
      facebookIs: [],
      products: {

      }
    };
    products.map(item => {
      if (!fbIds.facebookIs.includes(item.facebookId)) {
        fbIds.facebookIs.push(item.facebookId);
        fbIds.products[item.facebookId] = [];
        fbIds.products[item.facebookId].push(item);
      }else {
        fbIds.products[item.facebookId].push(item);
      }
    })

    return fbIds;
  }
  const [products, setProducts] = useState({
    facebookIs: [],
    products: {

    }
  });
  const getProducts = (id, page = 1) => {
    let requestOptions = {
			method: 'GET',
			headers: {
        'Content-Type': 'application/json',
      },
			redirect: 'follow'
		};

    fetch("http://localhost:3001/facebook/products/"+id+'/'+page, requestOptions)
      .then(response => response.json())
      .then(data => {
        const p = groupProductByFacebookId(data);
        setProducts(p);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const [accounts, setAccounts] = useState([]);
  const getAccounts = () => {
    let requestOptions = {
			method: 'GET',
			headers: {
        'Content-Type': 'application/json',
      },
			redirect: 'follow'
		};

    fetch("http://localhost:3001/facebook/accounts", requestOptions)
      .then(response => response.json())
      .then(data => {
        setAccounts(data);
        if (!facebookId) {
          onChangeFacebookAccount(data[0].facebookId);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  useEffect(() => {
    getAccounts();
  }, []);

  const renderPagination = (p) => {
    if (p.length == 10) {
      if (pageNumber != 1) {
        return (
        <PaginationContainer><PageItemNumber onClick={() => onChangePage(pageNumber +1)}>Next</PageItemNumber><PageItemNumber onClick={() => onChangePage(pageNumber -1)}>Previous</PageItemNumber></PaginationContainer>
        );
      } else {
        return (
          <PaginationContainer><PageItemNumber onClick={() => onChangePage(pageNumber +1)}>Next</PageItemNumber></PaginationContainer>
        );
      }
    } else {
      if (pageNumber != 1) {
        return (
        <PaginationContainer><PageItemNumber onClick={() => onChangePage(pageNumber -1)}>Previous</PageItemNumber></PaginationContainer>
        );
      }
    }

    return '';
  }
  return (
    <FullWidthLayout title="Create New App">
      <div className="container">
        <div>
           <select id="select_account" onChange={(e) => onChangeFacebookAccount(e.target.value)}>
             <option>Select account</option>
             {accounts.map(item=> <option selected={facebookId === item.facebookId} value={item.facebookId}>{item.name}</option>)}
           </select>
        </div>
        {products.facebookIs.map(element => {
          return (
            <>
              <ShopName><strong>{element}</strong></ShopName>
              {renderPagination(products.products[element])}
              <Line/>
              <LineProduct key={element} products={products.products[element]} title={AppConstant.products} />
              <Gap />
              {renderPagination(products.products[element])}
            </>
          );
        })}
      </div>

    </FullWidthLayout>
  )
}

export default withTranslation('common')(Home);
