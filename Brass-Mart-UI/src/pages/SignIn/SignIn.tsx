import { Center, Link, Text, VStack } from '@chakra-ui/react'
import SignInForm from './components/SignInForm'


function SignIn() {
  return (
    <Center p={6}>
      <VStack spacing={4}>
        <SignInForm />
        <Text>No account yet?{" "}
          <Link color="blue.400" href="/sign-up">
            Sign Up!
          </Link>
        </Text>
      </VStack>
    </Center>
  )
}

export default SignIn