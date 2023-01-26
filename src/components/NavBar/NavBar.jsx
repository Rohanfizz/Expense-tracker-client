import { Flex } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import React from 'react'
import { useRecoilState, useRecoilValue} from 'recoil'
import useAuth from '../../hooks/useLogin'
import SignInModal from '../../pages/SignIn'
import { isLoggedInState, signInModalState } from '../../store/auth'

const NavBar = () => {
    const {signUp,signIn,signOut} = useAuth();
    const isLoggedIn = useRecoilValue(isLoggedInState);
    const [signInModal,setSignInModal] = useRecoilState(signInModalState);

    const onSignUpHandler = (enteredEmail,enteredPassword)=>{
        signUp(enteredEmail,enteredPassword);
        setSignInModal(false);
    }
    const onSignInHandler = (enteredEmail,enteredPassword)=>{
        signIn(enteredEmail,enteredPassword);
        setSignInModal(false);
    }
    const onSignOutHandler = ()=>{
        signOut();
        setSignInModal(true);
    }
    const modalStateChanger=()=>{
        setSignInModal((old)=>!old);
    }
    
    return (
        <>  
            {signInModal && <SignInModal signInHandler={onSignInHandler} signUpHandler={onSignUpHandler}/>}
            <Flex h="4rem" color="blue" alignItems={'center'} paddingLeft={"2rem"} bgColor="#2d2d2d">
                {!isLoggedIn && <Button onClick={modalStateChanger}>Sign In</Button>}
                {isLoggedIn && <Button onClick={modalStateChanger} onClick={onSignOutHandler}>Sign Out</Button>}
            </Flex>
        </>
    )
}

export default NavBar