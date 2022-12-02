import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useSignIn from '../../requests/mutations/useSignIn';
import useSignUp from '../../requests/mutations/useSignUp';
import useUser from '../../requests/queries/useUser';

interface FormData {
  name: string,
  email: string,
  password: string,
};

function SignUp() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { refetch } = useUser();

  const { mutate: signIn } = useSignIn(
    { email: form.email, password: form.password },
    {
      onSuccess: (data: any) => {
        if (data.authenticateUserWithPassword.item) {
          navigate('/');
          refetch();
        }
        if (data.authenticateUserWithPassword.message) {
          setError(data.authenticateUserWithPassword.message)
        }
      },
    },
  );

  const { mutate: signUp, isLoading } = useSignUp(
    { ...form },
    {
      onSuccess: (data: any) => signIn(),
      onError: (error: any) => setError(error)
    },
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(null);
    signUp();
  };

  return (
    <Center p={6}>
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
            <Heading size='lg'>Sign Up</Heading>
          </Center>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired={true}>
                <FormLabel>Name</FormLabel>
                <Input
                  type='name'
                  placeholder='Your full name...'
                  name='name'
                  value={form?.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  placeholder='Your email...'
                  name='email'
                  value={form?.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  placeholder='Your password...'
                  name='password'
                  value={form?.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value})}
                />
                {/* <FormHelperText>Must be at least 8 characters, contain a number, capital letter, and 1 special character.</FormHelperText> */}
              </FormControl>
              {error && <Text color="red">Login failed - please try again</Text>}
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="Signing in..."
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Center>
  )
}

export default SignUp;