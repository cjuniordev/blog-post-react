import { Container, Logo, Options, Button, Option } from './style';
import ProfilePhoto from '../ProfilePhoto';
import profileImg from '../../assets/profile.png';

// icons
import { RiChatSmile3Line, RiNotification3Line } from 'react-icons/ri';

function Header() {
  return (
    <Container>
      <Logo />
      <Options>
        <Button>Write a post</Button>
        <Option><RiChatSmile3Line /></Option>
        <Option><RiNotification3Line /></Option>
        <ProfilePhoto />
      </Options>
    </Container>
  );
}

export default Header;
