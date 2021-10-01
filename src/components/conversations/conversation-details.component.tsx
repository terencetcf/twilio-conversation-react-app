import React, { useCallback, useEffect, useState } from 'react';

import { Conversation, ConversationMessage } from '../../types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Loader } from '../loaders';
import { ConversationMessageItem } from './conversation-message-item.component';

type Props = {
  conversation?: Conversation;
};

export const ConversationDetails: React.FC<Props> = ({ conversation }) => {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);

  const getMessages = useCallback(async () => {
    if (!conversation) {
      return;
    }

    const responseMessages = await conversation.getMessages();
    console.log('🚀 - getMessages - messages', responseMessages);

    setMessages(() => responseMessages.items);
  }, [conversation, setMessages]);

  useEffect(() => {
    getMessages();
  }, [conversation, getMessages]);

  if (messages.length < 1) {
    return <Loader />;
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {messages.map((item) => (
        <ConversationMessageItem message={item} />
      ))}
    </List>
  );
};
