import { Box } from '@chakra-ui/core';

import Layout from '../components/Layout';
import ServerList from '../components/ServerList';
import ServerName from '../components/ServerName';
import ChannelInfo from '../components/ChannelInfo';
import ChannelList from '../components/ChannelList';
import UserInfo from '../components/UserInfo';
import UserList from '../components/UserList';
import ChannelData from '../components/ChannelData';

export default function Home() {
  return (
    <Box w="full" >
      <Layout>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <UserInfo />
        <ChannelData />
        <UserList />
      </Layout>
    </Box>
  )
}
