import {useState } from "react";
import { useProfile } from "../../context/GitHubUserContext";
import { AiFillGithub } from 'react-icons/ai';


import styles from './styles.module.scss';

function Input() {
  const [username, setUsername] = useState('');
  const  { getUserGitHubData } = useProfile();

  return (
    <div className={styles.container}>
      <AiFillGithub className={styles.icon} size={50}/>
      <section>
        <input 
          type="text" 
          value={username} 
          placeholder='Insira seu Username'
          onChange={(event) => setUsername(event.target.value) }
          />
        <button 
          onClick={() => getUserGitHubData(username)
          }>
          Pesquisar
        </button>
      </section>
    </div>
  );
}

export default Input;
