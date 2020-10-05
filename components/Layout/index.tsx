import { Grid } from '@chakra-ui/core';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid
      templateColumns="71px 240px auto 240px"
      templateRows="46px auto 52px"
      templateAreas="
        'SL SN CI CI'
        'SL CL CD UL'
        'SL UI CD UL'
      "
      height="100vh"
    >
      {children}
    </Grid>
  );
}

export default Layout;

/**
 * SL - Server list
 * SN - Server Name
 * CI - Channel Info
 * CL - Channel List
 * CD - Channel Data
 * UL - User List
 * UI - User Info
 */