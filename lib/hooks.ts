import useSWR from "swr";
import fetcher from "./fetcher";
import { IPlaylist } from "../types/types";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return { user: data, isLoading: !data && !error, isError: error };
};

export const usePlaylist = (): IPlaylist => {
  const { data, error } = useSWR(`/playlist`, fetcher);

  return {
    playlists: (data as unknown as string[]) || [],
    isLoading: !data && !error,
    isError: error as string,
  };
};
