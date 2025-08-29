import { Container, Text, VStack } from '@chakra-ui/react';


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

        <Text fonstSize="x1" textAlign={"center"} fontWeight='bold' color='gray.50'>
          No Products found
        </Text>

      </VStack>
    </Container>
  )
};

export default HomePage