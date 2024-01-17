declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_KEY: string;
      CMS_HOST: string;
      CMS_KEY: string;
      GOOGLE_MAPS_API_KEY: string;
    }
  }
}

export {};
