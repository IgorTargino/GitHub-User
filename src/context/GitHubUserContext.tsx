import { createContext, ReactNode, useContext, useState } from "react";

import api from "../services/api";

interface GitHubUserData {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface GitHubUserContextData {
  getUserGitHubData: (user: string) => Promise<void>;
  userData: GitHubUserData;
}

interface GitHubUserProviderProps {
  children?: ReactNode;
}

export const GitHubUserContext = createContext<GitHubUserContextData>({} as GitHubUserContextData);

export function GitHubUserProvider({ children }: GitHubUserProviderProps) {
  const [userData, setUserData] = useState<GitHubUserData>({} as GitHubUserData);

  async function getUserGitHubData(user: string) {
    try {
      const { data } = await api.get(user);

      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GitHubUserContext.Provider
      value={{
        getUserGitHubData,
        userData,
      }}
    >
      {children}
    </GitHubUserContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(GitHubUserContext);

  return context;
}
