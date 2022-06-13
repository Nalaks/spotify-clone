import { FC } from "react";
import { NextApiRequest, NextApiResponse } from "next";

export type Mode = "signin" | "signup";
export type Body = {
  email: string;
  password: string;
};

export type AuthModeProps = { mode: Mode };

export interface IAuth {
  // eslint-disable-next-line no-unused-vars
  (mode: Mode, body: Body): Promise<Response>;
}

export interface IUser {
  email: string;
  password: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IArtistData {
  name: string;
  songs: any[];
}

export interface AuthFC extends FC {
  authPage: boolean;
}

export interface AuthHandler {
  // eslint-disable-next-line no-unused-vars
  (req: NextApiRequest, res: NextApiResponse<any>, user: IUser): any;
}
