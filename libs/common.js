const validEamil  = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const formatMoney = (price) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'  }).format(price)

export {
  validEamil,
  formatMoney
}
