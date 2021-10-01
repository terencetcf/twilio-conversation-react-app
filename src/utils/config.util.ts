import { Configs } from '../types/configs';

const getEnvConfigs = (): Configs => ({
  twilio: {
    account_sid: `${process.env.VITE_TWILIO_ACCOUNT_SID}`,
    auth_token: `${process.env.VITE_TWILIO_AUTH_TOKEN}`,
  },
});

export const configUtil = {
  getEnvConfigs,
};
