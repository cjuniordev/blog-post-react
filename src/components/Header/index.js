import { Container, Logo, Options, Button, Option, Profile, ImgProfile } from './style';
import profileImg from '../../assets/profile.png';

function Header() {
  return (
    <Container>
      <Logo />
      <Options>
        <Button>Write a post</Button>
        <Option>💬</Option>
        <Option>🔔</Option>
        <Profile>
          <ImgProfile src={profileImg} alt="Profile"/>
        </Profile>
      </Options>
    </Container>
  );
}

export default Header;
