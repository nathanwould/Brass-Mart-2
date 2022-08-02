import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useSignIn from '../../../requests/mutations/useSignIn';

type Props = {}

function SignInForm({ }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: signIn, data, isLoading, error } = useSignIn({email, password });
  // const { mutate: signIn, data, isLoading, error } = useMutation({
  //   onSuccess: () => {
  //     navigate('/')
  //   },
  // });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signIn();
  };
  return (
    <Box
      minW={{ base: 'lg', md: 'md'}}
      borderWidth='1px'
      borderRadius='lg'
      p={6}
      marginTop={6}
      boxShadow='lg'
    >
      <Stack spacing={4}>
        <Center>
          <Heading size='lg'>Sign In</Heading>
        </Center>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired={true}>
                <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='Your email...'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Your password...'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
                {/* <FormHelperText>Must be at least 8 characters, contain a number, capital letter, and 1 special character.</FormHelperText> */}
              </FormControl>
              <Button type="submit">Sign In</Button>
            </Stack>
        </form>
      </Stack>
    </Box>
  )
}

export default SignInForm