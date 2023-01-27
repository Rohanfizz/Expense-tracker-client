import { atom, selector } from "recoil";

export const tokenState = atom({
    key: 'tokenState',
    default: undefined,
  });

export const signInModalState = atom({
    key: 'signInModal',
    default: false,
});
export const signOutModal = atom({
    key: 'signOutModal',
    default: false,
});
export const isSigningInState = atom({
    key: 'isSigningInState',
    default: true,
});
export const isLoggedInState = selector({
    key: 'isLoggedIn',
    get: ({get}) => {
        const token= get(tokenState);
        return token!=undefined;
    },
});
