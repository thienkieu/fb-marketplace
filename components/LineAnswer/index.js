import styled from 'styled-components'
import LineItem from './LineItem';
import SectionTitle from '../SectionTitle';
import Gap from '../../components/Gap';
import { useState, useEffect  } from 'react';
import Intents from '../../data/intent'
import fetch from 'node-fetch'

const LineAnswer = ({title}) => {
  const [notification, setNotification] = useState('');
  const [error, setError] = useState(false);

  const [intent, setIntent] = useState('');
  const onChangeIntent = (value) => {
    setIntent(value.target.value);
    setNotification('');
  }

  const getQuestionTitle = () => {
    let title = '';
    for(let i = 0; i < Intents.length; i++) {
      if (Intents[i].intent === intent) {
        title = Intents[i].question;
      }
    }

    return title;
  }

  const [answer, setAnswer] = useState('');
  const onChangeAnswer = (value) => {
    setAnswer(value.target.value);
    setNotification('');
  }

  const getProductId = () => {
    const product = window.location.href.split('/');
    return product[product.length - 2];
  }

  const [product, setProduct] = useState({});
  const getAnswer = () => {
    let requestOptions = {
			method: 'GET',
			headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
		};

    fetch("https://fb-autochat-backend.herokuapp.com/facebook/product/"+getProductId()+'/answers', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        setNotification('Can not get answers');
        setError(true);
      });
  }

  const onUpdateAnswer = () => {

  }
  const onAddAnswer = () => {
    if (!intent) {
      setError(true);
      setNotification('Please select intent!');
      return;
    }

    if (!answer) {
      setError(true);
      setNotification('Please select answer!');
      return;
    }

    const body = {
      productId: getProductId(),
      intent: intent,
      answer: answer,
      question: getQuestionTitle()
    }

    let requestOptions = {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
			redirect: 'follow'
		};

    const url = update ? 'https://fb-autochat-backend.herokuapp.com/facebook/updateAnswer': 'https://fb-autochat-backend.herokuapp.com/facebook/addAnswer';
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        setNotification('Your answer have been added successfully!');
        setError(false);
        setIntent('');
        setAnswer('');
        setUpdate(false);
        getAnswer();
      })
      .catch((error) => {
        setNotification('Cannot add your answer');
        setError(true);
      });
  }

  const [update, setUpdate] = useState(false);
  const onClickUpdate = (item) => {
    setIntent(item.intent);
    setAnswer(item.answer);
    setUpdate(true);
  }

  const onCancelUpdate = () => {
    setIntent('');
    setAnswer('');
    setUpdate(false);
  }

  useEffect(()=>{
    getAnswer();
  },[])


  return (
    <>
        <div className="row">
            <SectionTitle className="col-12">
                {title}
            </SectionTitle>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <img src={product.imageUrl} height="100px;"  />
        </div>

        <Gap  height="10px"/>
        {notification && (
          <div className={`alert ${!error ? 'alert-success': 'alert-danger'}`} role="alert">
             {notification}
          </div>
        )}

        <form className="form-inline">
          <div className="form-group">
            <label className="mr-sm-2" htmlFor="exampleFormControlSelect1">Select Intent</label>
            <select disabled={update} value={intent} className="custom-select mb-3 mr-sm-3 mb-sm-0" id="exampleFormControlSelect1" onChange={onChangeIntent}>
               <option value="">Select Intent</option>
              {Intents.map(item => {
                return <option key={item.intent} Fvalue={item.intent}>{item.intent}</option>
              })}
            </select>
          </div>
          <div className="form-group mx-sm-3 col-3">
            <label className="mr-sm-2 ">Question: {getQuestionTitle()}</label>
          </div>
          <div className="form-group mx-sm-3">
            <label htmlFor="exampleFormControlInput1" className="mr-sm-2">Answer</label>
            <input value={answer} onChange={onChangeAnswer} type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div  className="form-group mx-sm-3">
            <button onClick={onAddAnswer} type="button" className="btn btn-primary">{update ? 'Update Answer': 'Add answer'}</button>
            {update && (<button  style={{marginLeft: '30px'}} onClick={onCancelUpdate} type="button" className="btn btn-primary">Cancel</button>)}
          </div>
        </form>
        <Gap  height="10px"/>
        <div className="row">
            <LineItem background="lightgray"  padding='10px 15px' key="header" className="col-12" item={{id: 'headerId', intent: "Intent" , question: 'Question content', answer: 'Answer'}} />
            {product && product.answers && (
              product.answers.map(item => <LineItem key={item._id} className="col-12" item={item} onClick={onClickUpdate} />)
            )}

        </div>
    </>
)};


export default LineAnswer;
