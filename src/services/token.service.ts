import twilio from 'twilio';
import { configUtil } from '../utils';

export const getJwtToken = (): string => {
  const configs = configUtil.getEnvConfigs();

  const AccessToken = twilio.jwt.AccessToken;
  const ChatGrant = AccessToken.ChatGrant;

  // Used when generating any kind of tokens
  const twilioAccountSid = configs.twilio.account_sid;
  const twilioApiKey = 'SKb6f311cc56e64fb39932f4ebc3dbb6d7';
  const twilioApiSecret = 'v3gSkzgwzBBk9TBzvYDLJQHHxumqZKsc';

  // Used specifically for creating Chat tokens
  const serviceSid = 'ISd47a61a52faa43a591749ce589b8484b';
  const identity = 'testMas3';

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({
    serviceSid: serviceSid,
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const accessToken = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { identity: identity }
  );

  accessToken.addGrant(chatGrant);

  // Serialize the token to a JWT string
  return accessToken.toJwt();
};

export const tokenService = {
  getJwtToken,
};
