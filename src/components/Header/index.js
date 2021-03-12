import { Container, Logo, ContainerButton, Options, Option } from './style';
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
        <ContainerButton>
          <Button>Write a post</Button>
        </ContainerButton>
        <Option><RiChatSmile3Line /></Option>
        <Option><RiNotification3Line /></Option>
        <ProfilePhoto size={36}/>
      </Options>
    </Container>
  );
}

export default Header;
