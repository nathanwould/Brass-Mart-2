import { Box, Heading, Stack } from '@chakra-ui/react';
import useUser from '../../requests/queries/useUser';

function Account() {
  const { data, isLoading, isError, error } = useUser();
  console.log(data?.authenticatedItem)

  if (isLoading) {
    return (
      <Box m={6}>Finding your account...</Box>
    )
  };

  if (!isLoading && !data.authenticatedItem) {
    return <Box m={6}>Oops! Account not found.</Box>
  };

  // if (isError) {
  //   return <Box m={6}>{error.message}</Box>
  // };

  return (
    <Stack
      m={6}
      marginBottom={12}
      spacing={6}
    >
      <Heading>Your Account</Heading>
    </Stack>
  );
}

export default Account;