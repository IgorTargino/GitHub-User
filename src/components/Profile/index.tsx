import { useEffect } from 'react';
import { useProfile } from '../../context/GitHubUserContext';

import styles from './styles.module.scss';

function Profile() {
  const { userData } = useProfile();
  
  return (
    <div className={styles.container}>
      <img src={userData.avatar_url} alt="avatar github"/>
      <div className={styles.data}>
        <h2>{userData.name}</h2>
        <p>{userData.bio}</p>
        <p>
          {userData.followers} followers &nbsp;
          {userData.following} folling
        </p>
      </div>
    </div>
  );
}

export default Profile;