import { Container, Header, Title, Button } from './style';
import ToComment from './ToComment';
import Comment from './Comment';
import ProfilePhoto from '../../../../components/ProfilePhoto';

function Discussion() {
  return (
    <Container>
      <Header>
        <Title>Discussion (2)</Title>
        <Button>Subscribe</Button>
      </Header>
      <ToComment />
      <Comment />
    </Container>
  );
}

export default Discussion;
