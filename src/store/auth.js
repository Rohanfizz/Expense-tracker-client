import { atom, selector } from "recoil";

export const token = atom({
    key: 'authtoken',
    default: undefined,
  });

export const signInModal = atom({
    key: 'signInModal',
    default: false,
});
export const isLoggedInState = selector({
    key: 'isLoggedIn',
    get: ({get}) => {
        const text = get(token);

        return text!==undefined;
    },
});
