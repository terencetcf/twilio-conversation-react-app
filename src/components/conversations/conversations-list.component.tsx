import React from 'react';
import List from '@mui/material/List';
import { Conversation } from '../../types';
import { Loader } from '../loaders';
import { ConversationItem } from './conversation-item';

type Props = {
  conversations: Conversation[];
  onConversationClick: (conversation: Conversation) => void;
};

export const ConversationsList: React.FC<Props> = ({
  conversations,
  onConversationClick,
}) => {
  if (conversations.length < 1) {
    return <Loader />;
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {conversations.map((item) => (
        <ConversationItem
          conversation={item}
          onClick={() => onConversationClick(item)}
        />
      ))}
    </List>
  );
};
