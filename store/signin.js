import { atom } from 'recoil';
// import apis from '../api/api';

export const signinState = atom({
  key: 'signinState',
  default: {
    email: '',
    name: '',
    tongkind: '',
  },
});
