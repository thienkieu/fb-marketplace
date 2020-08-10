import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const Register_Account = gql`
mutation acountRegister($type: AccountRegisterInput!){
  accountRegister(input: $type) {
    accountErrors {
      field
      code
    }
    user {
      email
      isActive
    }
  }
}
`;

export const Confirm_Account = gql`
mutation confirmAccount($email: String!, $token: String! ){
  confirmAccount(email: $email, token: $token) {
    accountErrors {
      field
      code
    }
    user {
      email
      isActive
    }
  }
}
`;

export const Login_Account = gql`
mutation tokenCreate($email: String!, $password: String! ){
  tokenCreate(email: $email, password: $password) {
    token
    user {
      email
    }
    errors {
      field
      message
    }
  }
}
`;
