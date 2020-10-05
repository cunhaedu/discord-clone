import React from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/core';
import { Hash } from 'react-feather';

const ChannelInfo: React.FC = () => {
  return (
    <Flex
      gridArea="CI"
      align="center"
      padding="0 17px"
      bg="gray.500"
      boxShadow="rgb(0, 0, 0, 0.2) 0px 1px 0px 0px"
      zIndex={2}
    >
      <Box as={Hash} size="24px" color="gray.700" />
      <Text ml="9px" fontSize="2xs" fontWeight="bold" color="white" >geral</Text>

      <Divider orientation="vertical" border="1px solid white" opacity={0.2} height="24px" margin="0 13px" />

      <Text fontSize="15px" color="gray.900" >Canal aberto para conversas</Text>
    </Flex>
  );
}

export default ChannelInfo;
