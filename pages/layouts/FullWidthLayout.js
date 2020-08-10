import Head from 'next/head';
import Footer from './Footer';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import LineProduct from '../../components/LineProduct';
import Line from '../../components/Line';
import Gap from '../../components/Gap';
import AppRouter from '../../app-router';
import ShopName from '../../components/ShopName';
import AppConstant from '../../app-constant';
import Search from '../search';

const OtherInfo = styled.div`
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 30px;
  width: 22px;
  right: 20px;
`;

const FullWidthLayout = (props) => {
  const [enableSearch, setEnableSearch] = useState(false);
  const clickEnableSearch = () => {
    setEnableSearch(true);
  }
  const clickDisableSearch = () => {
    setEnableSearch(false);
  }

  return (
    <div className={props.className}>
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
        </Head>
        <div>
            {!enableSearch && <SearchIcon onClick={clickEnableSearch}>
            <svg width="20px" height="20px" viewBox="0 0 487.95 487.95">
              <g>
                <g>
                  <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
                    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
                    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
          </SearchIcon>
          }
          {enableSearch && <Search onRemoveSearchClick={clickDisableSearch} />}
          <Banner url="https://www.grab.com/vn/wp-content/uploads/sites/11/2018/05/GrabFood-EX-Desktop-HeaderImageV1.jpg" />
          <div className="container">
            <ShopName className="col-xs-12" name={AppConstant.shopName} />
            <Line />
          </div>
          <Gap id="sticky-position" height="0px"/>
          {props.children}
        </div>
        <Footer />
    </div>
    );
};

export default FullWidthLayout;
