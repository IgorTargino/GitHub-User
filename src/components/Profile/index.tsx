import { useProfile } from '../../context/GitHubUserContext';

function Profile() {
  const { userData } = useProfile();

  return (
    <div>
      <img src={userData.avatar_url} alt=""/>
      <div>{userData.name}</div>
    </div>
  );
}

export default Profile;