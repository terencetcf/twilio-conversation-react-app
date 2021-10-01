import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Conversation } from '../../types';

type Props = {
  conversation: Conversation;
  onClick: (conversation: Conversation) => void;
};

export const ConversationItem: React.FC<Props> = ({
  conversation,
  onClick,
}) => {
  return (
    <>
      <ListItemButton
        key={conversation.sid}
        alignItems="flex-start"
        onClick={() => onClick(conversation)}
      >
        <ListItemAvatar>
          <Avatar alt={conversation.friendlyName} />
        </ListItemAvatar>
        <ListItemText
          primary={conversation.friendlyName}
          secondary={<>{conversation.dateUpdated.toISOString()}</>}
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
};
