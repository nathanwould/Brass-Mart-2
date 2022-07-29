import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'

type Props = {}

function SignInForm({}: Props) {
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
          <form>
            <Stack spacing={4}>
              <FormControl isRequired={true}>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Your email...' />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Your password...' />
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