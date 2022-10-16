import { JwtPayload } from "jsonwebtoken";

declare namespace NodeJS {
  export interface ProcessEnv {
    DB_URI: string;
    SECRET_KEY: string;
    MAIL_EMAIL: string;
    MAIL_PASS: string;
    MAIL_HOST: string;
  }
}

// interface userType
