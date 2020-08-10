import styled from 'styled-components';
import FullWidthLayout from '../layouts/FullWidthLayout';
import LineProduct from '../../components/LineProduct';
import Gap from '../../components/Gap';
import Products from '../../data/products';
import { useEffect, useState } from 'react';

const CloseSearch = styled.span`
  padding: 10px 20px 10px 10px;
  display: inline-block;
`;

const SearchInputSection = styled.div`
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: white;

`;
const SearchResultSection = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  background: white;
  top: 43px;
  padding-top: 10px;
`;

const SearchInput = styled.span`

`;

const SearchIcon = styled.span`
  position: absolute;
  top: 10px;
  left: 46px;
`;
const ClearSearch = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
`;

const Search = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [productResult, setProductResult] = useState(null);

  useEffect(() =>{

  });

  const onSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setProductResult(Products);
  }

  const clearSearchContent = () => {
    setSearchKeyword('');
    setProductResult(null);
  }

  return (
    <FullWidthLayout>
      <SearchInputSection>
          <CloseSearch onClick={props.onRemoveSearchClick}>
            <svg width="12px" height="12px" viewBox="0 0 348.333 348.334">
            <g>
              <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </CloseSearch>
          <SearchInput>
              <SearchIcon>
                <svg width="12px" height="12px" viewBox="0 0 487.95 487.95">
                  <g>
                    <g>
                      <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
                        c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
                        c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
              </SearchIcon>
              <input value={searchKeyword} onChange={e=>{onSearchChange(e)}} style={{width: 'calc( 100% - 50px )', padding: '2px 20px', border: '1px solid lightgray', borderRadius: '6px', outline: 'none'}} type="text"/>
              <ClearSearch onClick={clearSearchContent}>
                <svg width="12px" height="12px" style={{fill: 'lightgray'}} viewBox="0 0 27.965 27.965"><g><g><path d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982
                  C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78
                  l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782
                  c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"/></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              </ClearSearch>
          </SearchInput>
      </SearchInputSection>
      { productResult && <SearchResultSection>
        <div className="container" id="best-seller">
              <LineProduct products={productResult} />
              <Gap />
              <LineProduct products={productResult} />
        </div>
      </SearchResultSection>
      }
    </FullWidthLayout>
  )
}

export default Search;
