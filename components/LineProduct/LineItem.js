import styled from 'styled-components';
import Line from '../Line';
import Link from 'next/link';
import Chart from 'chart.js';
import { useEffect } from 'react';
const LineImage = styled.img`
    width: 100%;
    border-radius: 5px;
    display: inline-block;
`;

const LinePrice = styled.span`
    width: 30%;
    display: inline-block;
    text-align: right;
`;

const LineTitle = styled.span`
    font-weight: bold;
    width: 40%;
    display: inline-block;
    padding-left: 10px;
    a {
        color: #000;
    }
`;

const LineItem = ({item, className, isLatest}) => {
    const renderChart = (id) => {
      var ctx = document.getElementById(id).getContext('2d');
      const locations = Array.isArray(item.locations) ? item.locations : [item.locations];
      const labels = locations.map(i => i.title);
      const values = locations.map(i => i.view);
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: labels,
              datasets: [{
                  label: item.title,
                  borderColor: 'rgb(255, 99, 132)',
                  data: values
              }]
          },

          // Configuration options go here
          options: {}
      });
    }

    useEffect(()=>{
      renderChart(`chart_${item.productId}`);
    },[]);

    return (
        <>
            <div className={className}>
                    <span style={{width: '15%', display: 'inline-block'}}>
                        <Link href={`/product/${item.productId}`}><LineImage src={item.imageUrl}/></Link>
                    </span>

                    <LineTitle style={{width: '45%'}} >
                      <Link href={`/product/${item.productId}`}><a title={item.title}>{item.title} </a></Link>
                      <div style={{fontWeight:'normal'}}>vị trí bán: <strong>{item.location}</strong></div>
                      <div style={{fontWeight:'normal'}}>số lượng người xem: <strong>{item.view}</strong></div>
                      <canvas id={`chart_${item.productId}`}></canvas>
                    </LineTitle>
                    <LinePrice style={{width: '30%'}}><Link href={`/product/${item.productId}/answers`}><a title="Answers">Answer</a></Link></LinePrice>
            </div>
            {!isLatest &&
              (
                <div className={className}>
                  <Line margin="15px 0px"/>
                </div>
              )
            }

        </>
    )
}

export default LineItem;
