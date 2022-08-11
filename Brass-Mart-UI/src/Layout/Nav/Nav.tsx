import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import useUser from '../../requests/queries/useUser';
import { NavLink, useNavigate } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';
import useSignOut from '../../requests/mutations/useSignOut';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';

export default function WithSubnavigation() {
  const { data, refetch } = useUser();
  const user = data?.authenticatedItem;

  // mobile nav open/close methods
  const { isOpen, onToggle } = useDisclosure();
  // cart open/clsoe methods
  const { onOpen, isOpen: cartIsOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const { data: sessionData, mutate: signOut, isLoading } = useSignOut({
    onSuccess: () => {
      navigate('/')
    },
  });

  useEffect(() => {
    refetch();
  }, [sessionData, refetch])
  
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH='60px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <NavLink to={'/'}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontWeight='bold'
              color={useColorModeValue('gray.800', 'white')}
            >
              Brass Mart
            </Text>
          </NavLink>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav user={user} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify='flex-end'
          direction='row'
          spacing={6}
        >
          { !user ? 
            <>
              <Button
                as='a'
                fontSize='sm'
                fontWeight={400}
                variant='link'
                href='sign-in'
              >
                Sign In
              </Button>
              <Button
                as='a'
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize='sm'
                fontWeight={600}
                color='white'
                bg='blue.400'
                href='sign-up'
                _hover={{
                  bg: 'blue.300',
                }}
              >
                Sign Up
              </Button>
            </> 
            : 
            <>
              <Button
                onClick={() => signOut()}
                // isLoading={isLoading}
                // loadingText="Signing out..."
                cursor="pointer"
                fontSize='sm'
                color="blue.400"
                variant='link'
              >
                Sign Out
              </Button>
              <Button
                onClick={onOpen}
                fontSize='sm'
                fontWeight={600}
                color='white'
                bg='blue.400'
                _hover={{
                  bg: 'blue.300',
                }}
              >
                Cart
                <Text marginLeft=".5em">{user?.cartCount}</Text>
              </Button>
            </>
          }
          
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav user={user} />
      </Collapse>

      <Cart
        user={user}
        refetch={refetch}
        isOpen={cartIsOpen}
        onClose={onClose}
      />
    </Box>
  );
}
