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
import useSignIn from '../../../requests/mutations/useSignIn';
import useUser from '../../../requests/queries/useUser';

interface FormData {
  email: string,
  password: string,
};

function SignInForm() {
  const [form, setForm] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { data: sessionData, refetch } = useUser();

  const { mutate: signIn, data, isLoading } = useSignIn(
    { ...form },
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError(null);
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
            {error && <Text color="red">Login failed - please try</Text>}
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Signing in..."
            >
              Sign In
            </Button>
            </Stack>
        </form>
      </Stack>
    </Box>
  )
}

export default SignInForm