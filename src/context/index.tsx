import { ReactNode } from "react";
import { GitHubUserProvider } from "./GitHubUserContext";

interface Props {
  children?: ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <GitHubUserProvider>
      {children}
    </GitHubUserProvider>
  )  
}

export default ContextProvider;