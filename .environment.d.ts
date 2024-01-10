declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_KEY: string;
      CMS_HOST: string;
      CMS_KEY: string;
    }
  }
}

export {};
