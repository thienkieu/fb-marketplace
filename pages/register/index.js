import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { onError } from "@apollo/link-error";
import { withApollo } from '../../libs/apollo';
import FullWidthLayout from '../layouts/FullWidthLayout';
import { Register_Account } from '../../gql/account';
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


const Register = (props) => {
    const [accountRegister, { loading, error,  data }] = useMutation(Register_Account);
    const [enableSubmit, setEnableSubmit] = useState(false);
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

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const onChangePassword = (e) => {
      setPassword(e.target.value);
      if (confirmPassword !== e.target.value && confirmPassword) {
        setConfirmPasswordError('Password and Confirm Password is not match!');
      } else {
        setConfirmPasswordError('');
      }

      setShowBackendError(false);
      validate();
    }

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const onChangeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      if (password !== e.target.value) {
        setConfirmPasswordError('Password and Confirm Password is not match!');
      } else {
        setConfirmPasswordError('');
      }
      validate();
    }

    const validate = () => {
      if (!email || !validEamil(email) || (confirmPassword !== password))  {
        setEnableSubmit(false);
        console.log(enableSubmit)
        return false;
      }
      console.log(enableSubmit)
      setEnableSubmit(true);
      return true;
    }

    const onRegister = () => {
      if (!validate()) return;
      accountRegister({
        variables: {
           type: {
            email: email,
            password: password,
            redirectUrl: "http://localhost:3000/account-confirm/"
           }
        }
      });
      setShowBackendError(true);
    }

    const link = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });


    const renderError = (field) => {
      if (data && showBackendError && data.accountRegister.accountErrors) {
        const fieldError = data.accountRegister.accountErrors.filter(item => item.field === field);

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
      <FullWidthLayout title="register page">
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
            <Label htmlFor="password">Password:</Label>
            <input id="password" value={password} onChange={e => onChangePassword(e)} className="col-12" type="password" style={{padding: '5px', border: '1px solid lightgray', borderRadius: '5px'}}/>
            {passwordError && <ErrorWarning>{passwordError}</ErrorWarning>}
            {renderError('password')}
          </div>
          <div style={{marginTop: '15px'}}>
            <Label htmlFor="confirm-password">Confirm Password:</Label>
            <input id="confirm-password" value={confirmPassword} onChange={e=> onChangeConfirmPassword(e)} className="col-12" type="password" style={{padding: '5px', border: '1px solid lightgray', borderRadius: '5px'}}/>
            {confirmPasswordError && <ErrorWarning>{confirmPasswordError}</ErrorWarning>}
          </div>
          <RegisterButtons>
              <a href="/login">Đăng nhập</a>
              <button onClick={onRegister} style={{marginLeft: '20px'}} className="btn btn-primary" type="button" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {!loading && <span role="status" aria-hidden="true"></span>}
                &nbsp; &nbsp; Đăng ký
              </button>
          </RegisterButtons>
          <div>
              <a href="/forget-password">Quên mật khẩu</a>
          </div>
        </RegisterContainer>
      </FullWidthLayout>
    )
}

export default withApollo({ssr: true})(Register);
