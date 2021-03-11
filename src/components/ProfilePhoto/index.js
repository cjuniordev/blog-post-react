import { Profile, ImgProfile } from './style';
import profileImg from '../../assets/profile.png';

function ProfilePhoto(props) {
  return (
    <Profile size={props.size}>
      <ImgProfile src={profileImg} alt="Profile"/>
    </Profile>
  );
}

export default ProfilePhoto;
