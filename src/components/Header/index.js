import { Container, Logo, Options, Option } from './style';
import Button from '../Button';
import ProfilePhoto from '../ProfilePhoto';
import profileImg from '../../assets/profile.png';

// icons
import { RiChatSmile3Line, RiNotification3Line } from 'react-icons/ri';

function Header() {
  return (
    <Container>
      <Logo />
      <Options>
        <Button height={38} width={110}>Write a post</Button>
        <Option><RiChatSmile3Line /></Option>
        <Option><RiNotification3Line /></Option>
        <ProfilePhoto size={36}/>
      </Options>
    </Container>
  );
}

export default Header;
