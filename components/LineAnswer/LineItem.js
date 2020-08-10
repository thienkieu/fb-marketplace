import styled from 'styled-components';
import Line from '../Line';
import Link from 'next/link';

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

const LineItem = ({item, className, isLatest, background, padding, onClick}) => {
  console.log(item);
    return (
        <>
            <div onClick={()=>onClick(item)} className={className} style={{background: background, padding: padding}}>
                    <span style={{width: '20%', display: 'inline-block'}}>
                        {item.intent}
                    </span>

                    <LineTitle style={{width: '40%'}} >{item.question}</LineTitle>
                    <LineTitle style={{width: '40%'}} >{item.answer}</LineTitle>
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
