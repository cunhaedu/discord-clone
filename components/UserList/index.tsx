import React from 'react';
import { PseudoBox, Avatar, BoxProps, Text } from '@chakra-ui/core';

interface UserProps {
  nickname: string;
  src: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, src }) => {
  return (
    <PseudoBox
      marginTop="5px"
      padding="5px"
      display="flex"
      alignItems="center"
      cursor="pointer"
      rounded="4px"
      bg="transparent"
      transition="background .2s"
      _hover={{ bg: "rgb(255, 255, 255, 0.1)" }}
    >
      {/* <Box
        flexShrink={0}
        width="32px"
        height="32px"
        rounded="full"
        bg={isBot ? "orange.300" : "gray.500"}
      /> */}
      <Avatar name={nickname} size="sm" src={src} />
       <Text
        fontWeight="medium"
        marginLeft="13px"
        color="white"
        opacity={0.7}
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
      >{nickname}</Text>
      {isBot && <Text
        marginLeft="9px"
        bg="blue.400"
        color="white"
        rounded="4px"
        padding="4px 5px"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="11px"
      >Bot</Text> }
    </PseudoBox>
  );
}

const UserList: React.FC = () => {
  return (
    <div className="user-list">
      <Text
        marginTop="20px"
        textTransform="uppercase"
        fontSize="12px"
        fontWeight="medium"
        color="gray.900"
      >Disponíveis - 1</Text>

      <UserRow
        nickname="Usuário"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />

      <Text
        marginTop="20px"
        textTransform="uppercase"
        fontSize="12px"
        fontWeight="medium"
        color="gray.900"
      >Offline - 10</Text>

      <UserRow
        nickname="Robô do discord" isBot
        src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=566&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      />
       <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=402&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1594369428909-cf575675ca9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      />
      <UserRow
        nickname="usuário"
        src="https://images.unsplash.com/photo-1585444766258-026350b05a47?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </div>
  );
}

export default UserList;
