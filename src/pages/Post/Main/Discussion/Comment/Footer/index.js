import { Container, Button, IconWrapper, ButtonStatus, ButtonDescription } from './style';
import { RiHeart2Line, RiChat1Line } from 'react-icons/ri';

function Footer() {
  return (
    <Container>
      <Button>
        <IconWrapper><RiHeart2Line /></IconWrapper>
        <ButtonStatus>1</ButtonStatus>
        <ButtonDescription>likes</ButtonDescription>
      </Button>
      <Button>
        <IconWrapper><RiChat1Line /></IconWrapper>
        <ButtonDescription>Reply</ButtonDescription>
      </Button>
    </Container>
  );
}

export default Footer;
