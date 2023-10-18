import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const Links = [
  { name: 'INICIO', url: '/' },
  { name: 'ACERCA DE NOSOTROS', url: '/about' },
];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Flex
      px={2}
      py={1}
      w={200}
      h={'100px'}
      alignItems="center"
      justifyContent="center"
      textColor="white"
      borderWidth={2}
      borderColor={'white'}
      bgColor={'transparent'}
      _hover={{
        textDecoration: 'none',
        bg: 'white',
        textColor: 'gray',
      }}
    >
      {children}
    </Flex>
  );
};

export default function Header() {
  return (
    <>
      <Box
        bgImage="url('https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-1200x630.jpg')"
        px={4}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={500}
        brightness="40%"
      >
        <Box
          position="absolute"
          h={'100%'}
          w={'100%'}
          // top={100}
        >
          <Stack
            spacing={10}
            alignItems={'center'}
            h={'100%'}
            justifyContent="center"
          >
            <Text fontSize="4xl" color={'white'}>
              Machine Learning ADA School
            </Text>
            <HStack
              as={'nav'}
              spacing={1}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link.name} href={link.url}>
                  <NavLink >
                    {link.name}
                  </NavLink>
                </Link>  
              ))}
            </HStack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
