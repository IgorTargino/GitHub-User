import { useEffect } from 'react';
import { useProfile } from '../../context/GitHubUserContext';

import styles from './styles.module.scss';

function Profile() {
  const { userData } = useProfile();
  
  return (
    <div className={styles.container}>
      <img src={userData.avatar_url} alt=""/>
      <div className={styles.data}>
        <h1>{userData.name}</h1>
        <p>{userData.bio}</p>
        <section>
          <span>{userData.followers} followers</span>
          <span>{userData.following} following</span>
        </section>
      </div>
    </div>
  );
}

export default Profile;