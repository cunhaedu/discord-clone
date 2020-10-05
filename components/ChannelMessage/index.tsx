import React from 'react';
import { Avatar, Flex, Heading, PseudoBox, Text } from '@chakra-ui/core';

export interface Props {
  author: string;
  src: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

export const Mention: React.FC = () => {
  return (
    <Text
      color="blue.300"
      cursor="pointer"
    />
  );
}

const ChannelMessage: React.FC<Props> = ({
  author,
  src,
  date,
  content,
  hasMention,
  isBot
}) => {
  return (
    <PseudoBox
      display="flex"
      alignItems="center"
      padding="4px 16px"
      marginRight="4px"
      bg={hasMention ? "orange.100" : "transparent"}
      borderLeft={hasMention ? "2px solid #f9a839" : "none"}
      paddingLeft={hasMention && "14px"}
      marginTop="13px"
      _first={{ marginTop: "auto" }}
    >
      <Avatar size="md" name={author} src={src} />

      <Flex
        minH="40px"
        direction="column"
        justify="space-between"
        marginLeft="17px"
      >
        <Flex align="center" >
          <Heading color="white" fontSize="16px" >{author}</Heading>
          {isBot && <Text
            marginLeft="6px"
            bg="blue.400"
            color="white"
            rounded="4px"
            padding="4px 5px"
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="11px"
          >Bot</Text> }
          <Text marginLeft="6px" color="gray.900" fontSize="13px" >{date}</Text>
        </Flex>
        <Flex textAlign="left" fontSize="16px" color="white" >
          {hasMention && <PseudoBox
              _hover={{ textDecor: "underline" }}
              color="blue.300"
              cursor="pointer"
              marginRight="8px"
            >
              <Text>@cunhaedu,</Text>
            </PseudoBox> }
          <Text>{content}</Text>
        </Flex>
      </Flex>
    </PseudoBox>
  );
}

export default ChannelMessage;