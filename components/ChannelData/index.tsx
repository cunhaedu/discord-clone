import React, { useRef, useEffect } from 'react';
import { Flex, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/core';
import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Flex
      gridArea="CD"
      direction="column"
      justify="space-between"
      bg="gray.500"
    >
      <div className="messages" ref={messagesRef} >
        {Array.from(Array(5).keys()).map((n) => (
          <>
            <ChannelMessage
              key={n}
              author="usuário"
              date="05/10/2020"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              content="alguma mensagem"
            />
            <ChannelMessage
              key={n}
              author="usuário"
              date="05/10/2020"
              src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              content="alguma mensagem"
            />
          </>
        ))}

        <ChannelMessage
          author="usuário"
          date="05/10/2020"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          content="Alguma mensagem"
        />
        <ChannelMessage
          author="usuário"
          date="05/10/2020"
          src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=566&q=80"
          content="Alguma mensagem"
          isBot
        />
        <ChannelMessage
          author="eu"
          date="05/10/2020"
          src="https://avatars2.githubusercontent.com/u/60043166?s=400&u=cf7ed1fadbd908fb2fc4f4946b2771003283b322&v=4"
          content="Alguma mensagem"
        />
        <ChannelMessage
          author="usuário"
          date="05/10/2020"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          content="alguma mensagem"
          hasMention
        />
      </div>

      <InputGroup
        w="100%"
        padding="16px 16px"
      >
        <InputLeftElement
          children={<Icon
            name="at-sign"
            size="24px"
            color="gray.900"
            position="relative"
            left="24px"
            top="18px"
          />}
        />
        <Input
          w="100%"
          h="44px"
          type="text"
          padding="0 10px 0 57px"
          rounded="7px"
          color="white"
          bg="gray.600"
          position="relative"
          placeholder="Conversar em #geral"
          _placeholder={{ color: "gray.900" }}
          focusBorderColor="none"
        />
      </InputGroup>
    </Flex>
  );
}

export default ChannelData;