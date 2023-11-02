import React from 'react';
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

const Links = [
  { name: 'INICIO', url: '/' },
  { name: 'ACERCA DE NOSOTROS', url: '/about' },
];

const NavLink = ({ children, url }) => {
  return (
    <Link href={url} passHref>
      <Box
        p={4}
        cursor="pointer"
        transition="all 0.3s"
        _hover={{
          transform: 'scale(1.1)',
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

const Header = () => {
  return (
    <Box
      bgImage="url('https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-1200x630.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
    >
      <Flex
        p={4}
        alignItems="center"
        justifyContent="space-between"
        background="rgba(0, 0, 0, 0.6)"
      >
        <Text fontSize="4xl">Machine Learning ADA School</Text>
        <Flex>
          {Links.map((link) => (
            <NavLink key={link.name} url={link.url}>
              {link.name}
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
