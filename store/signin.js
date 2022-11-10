import { atom } from 'recoil';
// import apis from '../api/api';

export const signinState = atom({
  key: 'signinState',
  default: {
    email: '',
    password: '',
  },
});

// export const signinSelector = selectorFamily({
//   key: 'signinSelector',
//   get: (user) => async () => {
//     if (!user) {
//       return;
//     }
//     const response = await apis.Signin(user);
//     console.log(user, 'user');
//     console.log(response.data.DAT, 'response');
//     console.log(apis.Signin(user), 'foo');
//     return response;
//   },
// });
