import React from 'react';

import { ConversationMessage } from '../../types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

type Props = {
  message: ConversationMessage;
};

export const ConversationMessageItem: React.FC<Props> = ({ message }) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={`${message.author} - ${message.body}`}
          secondary={<>{message.dateUpdated.toLocaleString()}</>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
