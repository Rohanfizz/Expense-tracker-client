// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

import { useRecoilState } from "recoil";
import { tokenState } from "../store/auth";
import { dataState } from "../store/data";

const useAuth = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [data, setData] = useRecoilState(dataState);
    async function signUp(enteredEmail, enteredPassword) {
        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC23KyHp6FpseENY1kFLwZMs8XImN0EV6w",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Authentication Failed!");
            }

            const data = await response.json();
            const TokenId = data.idToken;
            console.log(data.name);
            console.log(data.petName);
            setToken(TokenId);
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }

    async function signIn(enteredEmail, enteredPassword) {
        try {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC23KyHp6FpseENY1kFLwZMs8XImN0EV6w",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Authentication Failed!");
            }

            const data = await response.json();
            const TokenId = data.idToken;
            console.log(data.name);
            console.log(data.petName);
            setToken(TokenId);
        } catch (err) {
            alert(err);
        }
    }

    async function signOut(){
        setData([]);
        setToken(undefined);
    }
    return {signUp,signIn,signOut};
}
export default useAuth;