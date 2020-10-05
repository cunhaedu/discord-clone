import React from 'react';
import { Button, Image, PseudoBox } from '@chakra-ui/core';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <PseudoBox
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      width="48px"
      height="48px"
      marginBottom="8px"
      bg={isHome ? 'purple.600' : 'gray.500' }
      cursor="pointer"
      position="relative"
      rounded={selected || isHome ? '16px' : 'full'}
      transition="border-radius .2s , background-color .2s"
      _hover={{ borderRadius: '16px', bg: isHome ? 'purple.600' : 'blue.400' }}
      _before={{
        content: `""`,
        width: "9px",
        height: "9px",
        position: "absolute",
        left: "-17px",
        top: "calc(50% - 4.5px)",
        backgroundColor: "white",
        borderRadius: "50%",
        display: hasNotifications ? "inline" : "none",
      }}
      _after={{
        content: `"${mentions && mentions}"`,
        bg: "red.300",
        w: "24px",
        h: "24px",
        padding: "0 4px",
        position: "absolute",
        bottom: "-4px",
        right: "-4px",
        borderRadius: "50%",
        border: "4px solid rgb(32,34,37)",
        textAlign: "right",
        fontSize: "13px",
        fontWeight: "bold",
        color: "white",
        display: mentions && mentions > 0 ? "inline" : "none"
      }}
    >
      {isHome && <Image src="https://svgshare.com/i/Pb9.svg" alt="discord" width="24px" height="24px" />}
    </PseudoBox>
  );
}

export default ServerButton;
