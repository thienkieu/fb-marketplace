const errorCodes = {
  PASSWORD_TOO_SHORT: 'Your pass word is to short!',
  UNIQUE: 'This email is existed!, please use another email!',
  INVALID: 'Token isnot valid, please enter correct token!'

}

const getErrorMessage = (code) => {
  if (errorCodes[code]) return errorCodes[code];

  return code;
}

export default getErrorMessage;
