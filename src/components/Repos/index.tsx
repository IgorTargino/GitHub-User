import { useProfile } from "../../context/GitHubUserContext";

import styles from "./styles.module.scss";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { AiFillStar, AiOutlineLink } from "react-icons/ai";

import { useState } from "react";

function Repos() {
  const { reposData } = useProfile();
  const [repo, setRepo] = useState(0);

  function beforeRepo() {
    if (repo !== 0) setRepo(repo - 1);
  }

  function afterRepo() {
    if (repo !== reposData.length - 1) setRepo(repo + 1);
  }

  return (
    <div className={styles.container}>
      <IoMdArrowDropleft
        size={25}
        className={styles.arrow}
        onClick={beforeRepo}
      />

      <div className={styles.repositories}>
        
        <div className={styles.data}>
          <h1>{reposData[repo].name}</h1>
          <p>{reposData[repo].description}</p>

          <div className={styles.footer}>
            <div>
              <p>{reposData[repo].language}</p>
              <AiFillStar className={styles.star} />
              <p>{reposData[repo].stargazers_count}</p>
            </div>
            <p>{`${repo+1}/${reposData.length}`}</p>
          </div>

        </div>

        <div className={styles.containerLink}>
          <a
            href={reposData[repo].homepage || reposData[repo].html_url}
            target="_blank" rel="noreferrer"
          >
            <AiOutlineLink size={25} />
          </a>
        </div>
      </div>

      <IoMdArrowDropright
        size={25}
        className={styles.arrow}
        onClick={afterRepo}
      />
    </div>
  );
}

export default Repos;
