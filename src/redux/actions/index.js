export const SAVEUSER = 'SAVEUSER';
export const SAVEWALLET = 'SAVEWALLET';

export const saveUser = (payload) => ({
  type: SAVEUSER,
  payload,
});

export const saveWallet = (payload) => ({
  type: SAVEWALLET,
  payload,
});

export const requestCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;

  dispatch(saveWallet(Object.keys(data)));
};
