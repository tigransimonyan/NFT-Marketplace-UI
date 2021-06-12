import React from 'react';
import {
  Box,
  Flex,
  Button,
  Input,
  Stack,
  Link,
  Text,
  InputGroup,
  InputLeftElement,
  IconButton,
  Collapse,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

const NAV_ITEMS = [
  {
    label: 'My Items',
    href: '#',
  },
  {
    label: 'Transfer',
    href: '#',
  },
];

function DesktopNavLink({ navItem }) {
  return (
    <Link
      href={navItem.href}
      fontSize={'sm'}
      fontWeight={700}
      color={useColorModeValue('gray.600', 'gray.200')}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('gray.800', 'white'),
      }}
    >
      {navItem.label}
    </Link>
  );
}

function MobileNavLink({ navItem }) {
  return (
    <Flex
      px={4}
      py={4}
      as={Link}
      href={navItem.href}
      justify={'space-between'}
      borderStyle={'solid'}
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Text fontWeight={700} color={useColorModeValue('gray.600', 'gray.200')}>
        {navItem.label}
      </Text>
    </Flex>
  );
}

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        h="78px"
        px={{ base: 4 }}
        color={useColorModeValue('gray.600', 'white')}
        bg={useColorModeValue('white', 'gray.800')}
        borderStyle={'solid'}
        borderBottom="1px"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Box>
          <Logo w="40px" pointerEvents="none" />
        </Box>
        <Box pl="5" flex="1">
          <InputGroup display={{ base: 'none', md: 'flex' }}>
            <InputLeftElement children={<SearchIcon color="gray.300" />} />
            <Input
              borderRadius="3xl"
              placeholder="Search by creator, collectible or collection"
              size="md"
            />
          </InputGroup>
        </Box>
        <Box pl="5" display={{ base: 'none', md: 'flex' }}>
          <Stack pl="5" direction="row" align="center" spacing={6}>
            {NAV_ITEMS.map((navItem, index) => (
              <DesktopNavLink key={index} navItem={navItem} />
            ))}
          </Stack>
          <Stack pl="7" direction="row" align="center" spacing={3}>
            <Button variant={'solid'} colorScheme={'teal'} size="md">
              Create
            </Button>
            <Button variant={'outline'} colorScheme={'teal'} size="md">
              Connect wallet
            </Button>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Stack>
        </Box>
        <Stack direction="row" display={{ base: 'flex', md: 'none' }}>
          <IconButton
            icon={<SearchIcon />}
            variant="outline"
            aria-label={'Toggle Navigation'}
          />
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="outline"
            aria-label={'Toggle Navigation'}
          />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack px={4} py={4} direction="row" align="center" spacing={3}>
          <Button flex={1} variant={'solid'} colorScheme={'teal'} size="md">
            Create
          </Button>
          <Button flex={1} variant={'outline'} colorScheme={'teal'} size="md">
            Connect wallet
          </Button>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
        <Box
          borderStyle={'solid'}
          borderBottom="1px"
          borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
          {NAV_ITEMS.map((navItem, index) => (
            <MobileNavLink navItem={navItem} key={index} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
