import { IAuth } from "../types/types";
import fetcher from "./fetcher";

export const auth: IAuth = (mode, body) => {
  return fetcher(`/${mode}`, body);
};
