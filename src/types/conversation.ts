export type ConversationMessage = {
  conversation: any;
  domain?: string;
  services: any;
  state: any;
  _events: any;
  _eventsCount: number;
  _maxListeners?: any;
  aggregatedDeliveryReceipt: any;
  attributes: any;
  author: string;
  body: string;
  dateCreated: Date;
  dateUpdated: Date;
  index: number;
  lastUpdatedBy?: Date;
  media?: any;
  participantSid: string;
  sid: string;
  subject?: any;
  type: string;
};

export type GetConversationMessagesResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  items: ConversationMessage[];
  nextPage: any;
  prevPage: any;
};

export type Conversation = {
  channelState: any;
  domain?: string;
  entity: any;
  entityName: string;
  entityPromise: any;
  messagesEntity: any;
  participants: any;
  participantsEntity: any;
  services: any;
  sid: string;
  statusSource: string;
  _events: any;
  _eventsCount: number;
  _maxListeners?: any;
  attributes: any;
  createdBy: 'system';
  dateCreated: Date;
  dateUpdated: Date;
  friendlyName: string;
  lastMessage: any;
  lastReadMessageIndex?: any;
  notificationLevel: string;
  state: any;
  current: string;
  status: string;
  uniqueName?: string;
  getMessages: () => GetConversationMessagesResponse;
};

export enum ConversationClientState {
  connecting = 'connecting',
  connected = 'connected',
  disconnecting = 'disconnecting',
  disconnected = 'disconnected',
  denied = 'denied',
}
