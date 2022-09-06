// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express from "express";

declare module "express" {
  export interface Request {
    body: {
      // user_id?: number;
      // user_password: string;
      // user_username: string;
    };
  }
}
