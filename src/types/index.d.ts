import { EmailConfig } from 'next-auth/providers';

export type SendRequestParams = {
  identifier: string;
  url: string;
  provider: EmailConfig;
  theme: Theme;
};

export type Theme = {
  brandColor?: string;
  buttonText?: string;
};
