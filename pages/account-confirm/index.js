import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../../libs/apollo';
import FullWidthLayout from '../layouts/FullWidthLayout';
import { Confirm_Account } from '../../gql/account';
import { useState, useEffect } from 'react';
import { validEamil } from '../../libs/common';
import getErrorMessage from '../../errorCode';

const RegisterContainer = styled.div`
  padding-top:100px;
`;

const Label = styled.label`
  padding-left: 0px;
`;

const RegisterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ErrorWarning = styled.div`
  color: red;
`;

const GeneralError = styled.div`

`


const AccountConfirm = (props) => {
    const [confirmAccount, { loading, error,  data }] = useMutation(Confirm_Account);
    const [showBackendError, setShowBackendError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const onChangeEmail = (e) => {
      setEmail(e.target.value);
      setShowBackendError(false);
      if (!validEamil(e.target.value)) {
        setEmailError('Email is not valid format!');
      } else {
        setEmailError('');
      }
      validate();
    }

    const [token, setToken] = useState('');
    const onChangeToken = (e) => {
      setToken(e.target.value);
      setShowBackendError(false);
      validate();
    }


    const validate = () => {
      if (!email || !validEamil(email) || !token)  {
        return false;
      }

      return true;
    }

    const onConfirmAccount = () => {
      if (!validate()) return;
      confirmAccount({
        variables: {
            email: email,
            token: token
           }
      });
      setShowBackendError(true);
    }

    const renderError = (field) => {
      if (data && showBackendError && data.confirmAccount.accountErrors) {
        const fieldError = data.confirmAccount.accountErrors.filter(item => item.field === field);

        const errors = fieldError.map(item => (<ErrorWarning> {getErrorMessage(item.code)}</ErrorWarning>));
        return errors;
      }
    }

    const renderGeneralError = () => {
      return ( error &&
        <div className="alert alert-danger" role="alert">
          <ErrorWarning>{error.message}</ErrorWarning>
        </div>
      );
    }

    const renderSuccessAccount = () => {
      return ( data && data.user &&
        <div className="alert alert-success" role="alert">
            Your account had been registed, Please check your email to active account.
        </div>
      );
    }

    return (
      <FullWidthLayout  title="account confirm page">
        <RegisterContainer className="container">
          {renderGeneralError()}
          {renderSuccessAccount()}
          <div>
            <Label htmlFor="email" >Email:</Label>
            <input id="email" value={email} onChange={(e) => onChangeEmail(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  className="col-12" type="email" style={{padding: '5px', border: '1px solid lightgray', borderRadius: '5px'}}/>
            {emailError && <ErrorWarning>{emailError}</ErrorWarning>}
            {renderError('email')}
          </div>
          <div style={{marginTop: '15px'}}>
            <Label htmlFor="password">Token:</Label>
            <input id="token" value={token} onChange={e => onChangeToken(e)} className="col-12" type="text" style={{padding: '5px', border: '1px solid lightgray', borderRadius: '5px'}}/>
            {renderError('token')}
          </div>
          <RegisterButtons>
              <a href="/login">Đăng nhập</a>
              <button onClick={onConfirmAccount} style={{marginLeft: '20px'}} className="btn btn-primary" type="button" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {!loading && <span role="status" aria-hidden="true"></span>}
                &nbsp; &nbsp; Active account
              </button>
          </RegisterButtons>
          <div>
              <a href="/">Trang Chủ</a>
          </div>
        </RegisterContainer>
      </FullWidthLayout>
    )
}

export default withApollo({ssr: true})(AccountConfirm);
