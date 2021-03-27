import { useEffect, useState } from 'react';
import Profile from '../Profile';
import Repos from '../Repos';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles.module.scss';

function Widget() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className={styles.container}>
      {loading && <CircularProgress/>}
      {!loading && 
      <>
        <Profile/>
        <Repos/>
      </>}
    </div>
  )
}

export default Widget;