export type Dir = 'ltr' | 'rtl';

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: Dir;
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: 'English',
    lang: 'en-US',
    dir: 'ltr',
  },
  'zh-cn': {
    label: '简体中文',
    lang: 'zh-CN',
    dir: 'ltr',
  },
};

export const DEFAULT_LOCALE_SETTING: string = 'zh-cn';
