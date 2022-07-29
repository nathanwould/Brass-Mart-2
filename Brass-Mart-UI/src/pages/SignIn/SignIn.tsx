import { Box, Center } from '@chakra-ui/react'
import SignInForm from './components/SignInForm'

type Props = {}

function SignIn({}: Props) {
  return (
    <Center p={6}>
      <SignInForm />
    </Center>
  )
}

export default SignIn