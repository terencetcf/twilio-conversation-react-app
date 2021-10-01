import { useCallback, useEffect, useState } from 'react';
import { Client as ConversationsClient } from '@twilio/conversations';
import { Conversation, ConversationClientState } from '../../types';
import { ConversationsList } from './conversations-list.component';
import { ConversationDetails } from './conversation-details.component';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { VariantType, useSnackbar } from 'notistack';
import { conversationClientStateMapping } from './conversation-client-state.mapping';
import { TokenCreator } from '../tokens';

export const Conversations = () => {
  const [token, setToken] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzNhNjVmYjNhZjllMjgwN2ExODY1M2Q4OTkzY2VkYjliLTE2MzMxMDcwMjUiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJ0ZXN0TWFzMyIsImNoYXQiOnsic2VydmljZV9zaWQiOiJJU2Q0N2E2MWE1MmZhYTQzYTU5MTc0OWNlNTg5Yjg0ODRiIn19LCJpYXQiOjE2MzMxMDcwMjUsImV4cCI6MTYzMzExMDYyNSwiaXNzIjoiU0szYTY1ZmIzYWY5ZTI4MDdhMTg2NTNkODk5M2NlZGI5YiIsInN1YiI6IkFDMzFhY2M3NDIxOWRhYTdjMjFlYWYzYjM2OGM5NWYzMDUifQ.Cr8d7xhmrZ3DElBtens5ote-P4B8nc9rdLrqTaQxc_E'
  );
  // const [client, setClient] = useState<ConversationsClient>();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>();
  const { enqueueSnackbar } = useSnackbar();

  const initConversations = useCallback(async () => {
    if (!token) {
      return;
    }

    enqueueSnackbar('Connecting to Twilio…', { variant: 'info' });
    const client = await ConversationsClient.create(token);

    client.on('connectionStateChanged', (state: ConversationClientState) => {
      const messageInfo = conversationClientStateMapping[state];
      enqueueSnackbar(messageInfo.message, {
        variant: messageInfo.type as VariantType,
      });
    });

    client.on('conversationJoined', (conversation: Conversation) => {
      setConversations((current) => {
        if (current.some((x) => x.sid === conversation.sid)) {
          return current;
        }

        return [...current, conversation];
      });
    });

    client.on('conversationLeft', (conversation: Conversation) => {
      setConversations((current) =>
        current.filter((x) => x.sid !== conversation.sid)
      );
    });

    // setClient(client);
  }, [token, enqueueSnackbar]);

  useEffect(() => {
    initConversations();
  }, [token, initConversations]);

  useEffect(() => {
    if (selectedConversation || conversations.length < 1) return;

    setSelectedConversation(conversations[0]);
  }, [conversations, selectedConversation]);

  const onConversationClick = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="conversation">
      <h1>Conversations</h1>

      <Box sx={{ flexGrow: 1 }} px={2}>
        <Grid container spacing={2} className="conversations">
          <Grid item xs={4}>
            <ConversationsList
              conversations={conversations}
              onConversationClick={onConversationClick}
            />
          </Grid>
          <Grid item xs={8}>
            <ConversationDetails conversation={selectedConversation} />
          </Grid>
        </Grid>
      </Box>
      <TokenCreator />
    </div>
  );
};
