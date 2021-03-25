import {useState } from "react";
import { useProfile } from "../../context/GitHubUserContext";
import { AiFillGithub } from 'react-icons/ai';


import styles from './styles.module.scss';

function Input(props: any) {
  const [username, setUsername] = useState('');
  const  { getUserGitHubData, getReposUserData } = useProfile();

  async function handleSubmit() {
    await getUserGitHubData(username);
    await getReposUserData(username);
    props.setSession(true);
  }

  return (
    <div className={styles.container}>
      <AiFillGithub className={styles.icon} size={70}/>
      <section>
        <input 
          type="text" 
          value={username} 
          placeholder='Insira seu Username'
          onChange={(event) => setUsername(event.target.value) }
          />
        <button onClick={handleSubmit}>
          Pesquisar
        </button>
      </section>
    </div>
  );
}

export default Input;
