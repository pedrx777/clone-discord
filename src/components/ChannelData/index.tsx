import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return <Container>
    <Messages ref={messagesRef}>
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />
    <ChannelMessage
        author="Pedrx 777"
        date="29/08/2020"
        content="Amanhã é o meu aniversário!"
      />

      <ChannelMessage
        author="Clecio 013"
        date="28/08/2020"
        content={
          <>
            <Mention>@Pedrx 777</Mention>, me carrega no Cs de novo por favor?
          </>
        }
        hasMention
        isBot
      />
    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      <InputIcon />
    </InputWrapper>
  </Container>;
};

export default ChannelData;
