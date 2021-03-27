import { useState } from "react";
import { useProfile } from "../../context/GitHubUserContext";
import { AiFillGithub } from "react-icons/ai";

import styles from "./styles.module.scss";

function Input(props: any) {
  const [username, setUsername] = useState("");
  const { getUserGitHubData, getReposUserData } = useProfile();

  async function handleSubmit() {
    await getUserGitHubData(username);
    await getReposUserData(username);
    props.setSession(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <AiFillGithub size={70} />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          value={username}
          placeholder="Insira seu Usuário"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>
          Pesquisar</button>
      </div>
    </div>
  );
}

export default Input;
