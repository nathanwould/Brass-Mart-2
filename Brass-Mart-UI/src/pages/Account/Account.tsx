import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Orders from '../../Layout/Orders/Orders';
import useUser from '../../requests/queries/useUser';
import { IUser } from '../../types';

function Account() {
  const { data, isLoading, isError, error } = useUser();
  const user = data?.authenticatedItem;
  if (isLoading) {
    return (
      <Box m={6}>Finding your account...</Box>
    )
  };

  if (!isLoading && !data.authenticatedItem) {
    return <Box m={6}>Oops! Account not found.</Box>
  };

  // if (isError) {
  //   return <Box m={6}>{error}</Box>
  // };

  return (
    <Stack
      m={6}
      marginBottom={12}
      spacing={6}
    >

      <Heading>Your Account</Heading>

      {user?.addresses.length && <Heading>Address:</Heading>}
      
      {user?.orders.length ?
        <Orders user={user} />
        : <Text>You have no previous orders.</Text>
      }

    </Stack>
  );
}

export default Account;