import { Flex } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import React from 'react'
import { useRecoilState, useRecoilValue} from 'recoil'
import SignIn from '../../pages/SignIn'
import { isLoggedInState, signInModal } from '../../store/auth'

const NavBar = () => {
    const isLoggedIn = useRecoilValue(isLoggedInState);
    const [signIn,setSignIn] = useRecoilState(signInModal);
    const onSignInHandler = ()=>{
        console.log(signIn);
        setSignIn((old)=>!old);
    }
    const onSignOutHandler = ()=>{
      
    }
    return (
        <>  
            {signIn && <SignIn/>}
            <Flex h="4rem" color="blue" alignItems={'center'} paddingLeft={"2rem"} bgColor="#2d2d2d">
                {!isLoggedIn && <Button onClick={onSignInHandler}>Sign In</Button>}
                {isLoggedIn && <Button onClick={onSignOutHandler}>Sign Out</Button>}
            </Flex>
        </>
    )
}

export default NavBar