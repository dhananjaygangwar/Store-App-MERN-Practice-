import { Container, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 
        </Text>

        <Text fontSize="xl" textAlign={"center"} fontWeight='bold' color='gray.50'>
          No Products found 🥲 {""}
          <Link to={"/create"}>
            <Text as='span' ml={2} color='blue.500' _hover={{ textDecoration: "underline" }}>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
};

export default HomePage