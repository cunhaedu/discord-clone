import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <div className="server-list">
      <ServerButton isHome />

      <Box
        minW="32px"
        minH="2px"
        bg="gray.500"
        marginBottom="8px"
      ></Box>

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={1} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
    </div>
  );
}

export default ServerList;