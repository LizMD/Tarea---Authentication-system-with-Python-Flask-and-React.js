import React from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Crea Tu Cuenta</Heading>
          <Link as={RouterLink} to="/signupcard">
          <Button colorScheme={'pink'} variant={'solid'}>
              Regístrate
            </Button>
            </Link>
          <Heading fontSize={'2xl'}>Inicia Sesión en tu Cuenta</Heading>
          <Link as={RouterLink} to="/logincard">
            <Button colorScheme={'blue'} variant={'solid'}>
              Inicia Sesión
            </Button>
            </Link>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
