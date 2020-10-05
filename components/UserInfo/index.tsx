import React from 'react';
import { Flex, Text, PseudoBox, Avatar } from '@chakra-ui/core';
import { Headphones, Mic, Settings } from 'react-feather';

const UserInfo: React.FC = () => {
  return (
    <Flex
      gridArea="UI"
      bg="gray.400"
      align="center"
      justify="space-between"
      padding="10px"
      boxShadow="rgb(0, 0, 0, 0.2) 0px 1px 0px 0px"
      >
      <Flex
        align="center"
      >
        <Avatar
          name="cunhaedu"
          src="https://avatars2.githubusercontent.com/u/60043166?s=400&u=cf7ed1fadbd908fb2fc4f4946b2771003283b322&v=4"
          size="sm"
          border="none"
        />
        <Flex
          marginLeft="8px"
          direction="column"
          justify="left"
        >
          <Text
            display="block"
            fontSize="13px"
            fontWeight="bold"
            color="white"
          >
            cunhaedu
          </Text>
          <Text color="gray.900" fontSize="13px" >#9854</Text>
        </Flex>

      </Flex>

      <Flex>
        <PseudoBox as={Mic} w="20px" color="white" opacity={0.7} cursor="pointer" transition="opacity .2s" _hover={{ opacity: 1 }} />
        <PseudoBox as={Headphones} marginLeft="7px" w="20px" color="white" opacity={0.7} cursor="pointer" transition="opacity .2s" _hover={{ opacity: 1 }} />
        <PseudoBox as={Settings} marginLeft="7px" w="20px" color="white" opacity={0.7} cursor="pointer" transition="opacity .2s" _hover={{ opacity: 1 }} />
      </Flex>
      
    </Flex>
  );
}

export default UserInfo;
