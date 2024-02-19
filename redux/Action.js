
import { login, logout } from "./Reducer";
export const authenticate = (username, password) => (dispatch) => {
  if (username === 'hassini' && password === 'yassine') {
    dispatch(login());
  } else {
    dispatch(logout());
  }
};

