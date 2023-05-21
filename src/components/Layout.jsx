import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillApple } from "react-icons/ai";

export default function Layout({ children }) {
  const GNB = [
    { name: "홈", href: "/", icon: AiFillHome },
    { name: "프로필", href: "/profile", icon: AiFillHome },
    { name: "투어", href: "/tour", icon: AiFillHome },
  ];
  return (
    <Box w="full" display="flex" justifyContent="center">
      <HStack
        bg="#2F334D"
        position="fixed"
        top={0}
        maxWidth={"sm"}
        w="full"
        h={20}
        px={10}
        fontWeight={600}
        color={"white"}
        justifyContent="center"
        alignItems="center"
        zIndex={9}
      >
        <AiFillApple color="white" size={32} />
      </HStack>
      <Box pt={20} pb={0} w="sm" bg="#3C415E" minH="100vh">
        {children}
      </Box>
      <HStack
        position="fixed"
        bottom={0}
        bg="#2F334D"
        maxWidth="sm"
        w="full"
        h="120px"
        aligni="center"
        justifyContent="space-between"
      >
        <Grid templateColumns={"repeat(3, 1fr)"} w="full" borderTop={2}>
          {GNB.map((item, index) => (
            <Link to={item.href} key={index}>
              <GridItem cursor={"pointer"}>
                <VStack alignItems={"center"}>
                  <Box>
                    <item.icon color="white" />
                  </Box>
                  <Text fontWeight="600" color="white">
                    {item.name}
                  </Text>
                </VStack>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </HStack>
    </Box>
  );
}
