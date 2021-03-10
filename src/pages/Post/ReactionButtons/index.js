import { Container, ContainerButton, Button, Count } from './style';

// icons
import { RiHeart2Line } from 'react-icons/ri';
import { GiUnicorn } from 'react-icons/gi';
import { FaRegBookmark } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';

function ReactionButtons() {
  return (
    <Container>
      <ContainerButton>
        <Button><RiHeart2Line /></Button>
        <Count>3</Count>
      </ContainerButton>
      <ContainerButton>
        <Button><GiUnicorn /></Button>
        <Count>3</Count>
      </ContainerButton>
      <ContainerButton>
        <Button><FaRegBookmark /></Button>
        <Count>3</Count>
      </ContainerButton>
      <ContainerButton>
        <Button><HiDotsHorizontal /></Button>
      </ContainerButton>
    </Container>
  );
}

export default ReactionButtons;
