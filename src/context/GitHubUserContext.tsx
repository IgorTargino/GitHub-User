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

interface ReposUserData {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage: string;
  html_url: string;
}

interface GitHubUserContextData {
  getUserGitHubData: (user: string) => Promise<void>;
  getReposUserData: (user: string) => Promise<void>;
  userData: GitHubUserData;
  reposData: Array<ReposUserData>;
}

interface GitHubUserProviderProps {
  children?: ReactNode;
}

export const GitHubUserContext = createContext<GitHubUserContextData>({} as GitHubUserContextData);

export function GitHubUserProvider({ children }: GitHubUserProviderProps) {
  const [userData, setUserData] = useState<GitHubUserData>({} as GitHubUserData);
  const [reposData, setReposData] = useState<ReposUserData[]>([])

  async function getUserGitHubData(user: string) {
    try {
      const { data } = await api.get(user);

      setUserData(data);
    }catch (error) {
      console.log(error);
    }
  }

  async function getReposUserData(user: string) {
    try {
      const { data } = await api.get(`${user}/repos`)

      setReposData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GitHubUserContext.Provider
      value={{
        getUserGitHubData,
        getReposUserData,
        userData,
        reposData,
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
