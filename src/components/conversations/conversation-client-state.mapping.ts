import { VariantType } from 'notistack';
import { ConversationClientState } from '../../types';

type ConversationClientStateMessageMapping = {
  message: string;
  type: VariantType;
};

export const conversationClientStateMapping: Record<
  ConversationClientState,
  ConversationClientStateMessageMapping
> = {
  [ConversationClientState.connecting]: {
    message: 'Connecting to Twilio…',
    type: 'info',
  },
  [ConversationClientState.connected]: {
    message: 'You are connected',
    type: 'success',
  },
  [ConversationClientState.disconnecting]: {
    message: 'Disconnecting from Twilio…',
    type: 'warning',
  },
  [ConversationClientState.disconnected]: {
    message: 'Disconnected',
    type: 'warning',
  },
  [ConversationClientState.denied]: {
    message: 'Failed to connect',
    type: 'error',
  },
};
