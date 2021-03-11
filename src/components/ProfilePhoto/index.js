import { Profile, ImgProfile } from './style';
import profileImg from '../../assets/profile.png';

function ProfilePhoto() {
  return (
    <Profile>
      <ImgProfile src={profileImg} alt="Profile"/>
    </Profile>
  );
}

export default ProfilePhoto;
