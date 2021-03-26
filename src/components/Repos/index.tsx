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
          <h2>{reposData[repo].name}</h2>
          <p>{reposData[repo].description}</p>
          <section>
            <div>
              <span>{reposData[repo].language}</span>
              <AiFillStar className={styles.star} />
              <span>{reposData[repo].stargazers_count}</span>
            </div>
            <span>{`${repo+1}/${reposData.length}`}</span>
          </section>

        </div>

        <div className={styles.containerLink}>
          <a
            href={reposData[repo].homepage || reposData[repo].html_url}
            target="_blank"
          >
            <AiOutlineLink size={50} />
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
