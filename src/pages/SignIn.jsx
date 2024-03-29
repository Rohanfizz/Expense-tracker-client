import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isSigningInState } from '../store/auth';

export default function SignInModal({ signInHandler, signUpHandler }) {
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [isSigningIn, setisSigningIn] = useRecoilState(isSigningInState)
  const changeSignInStateHandler = () => {
    setisSigningIn((old) => !old);
  }
  const emailChangeHandler = (e) => {
    setemailValue(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setpasswordValue(e.target.value);
  }
  const signInClick =()=>{
    signInHandler(emailValue, passwordValue);
    setemailValue("");
    setpasswordValue("");
  }
  const signupClick= ()=>{
    signUpHandler(emailValue, passwordValue);
    setemailValue("");
    setpasswordValue("");
  }
  return (
    <Flex
      position={"fixed"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={emailValue} onChange={emailChangeHandler} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={passwordValue} onChange={passwordChangeHandler} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              {isSigningIn && <><Button
                onClick={signInClick}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Don't Have an Account? <Button variant={"unstyled"} onClick={changeSignInStateHandler} color={'blue.400'}>Sign Up</Button>
                  </Text>
                </Stack></>}
              {!isSigningIn && <><Button
                onClick={signupClick}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign Up
              </Button>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Button variant={"unstyled"} onClick={changeSignInStateHandler} color={'blue.400'}>Login</Button>
                  </Text>
                </Stack></>}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}