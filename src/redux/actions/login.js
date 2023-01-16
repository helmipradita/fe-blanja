import axios from 'axios';

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_PENDING' });
    const result = await axios.post(
      'https://be-blanja-production.up.railway.app/users/login',
      data
    );
    const user = result.data.data;
    localStorage.setItem('token', user.token);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user });
    navigate('/dashboard/myproduct');
    console.log('user login success');
  } catch (err) {
    console.log('user login error');
    console.log(err);
  }
};
