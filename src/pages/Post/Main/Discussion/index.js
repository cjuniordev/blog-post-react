import { Container, Header, Title, Button, ToComment, PhotoWrapper, TextArea } from './style';
import ProfilePhoto from '../../../../components/ProfilePhoto';

function Discussion() {
  return (
    <Container>
      <Header>
        <Title>Discussion (2)</Title>
        <Button>Subscribe</Button>
      </Header>
      <ToComment>
        <PhotoWrapper>
          <ProfilePhoto size={32}/>
        </PhotoWrapper>
        <TextArea placeholder="Add to the discussion" />
      </ToComment>
    </Container>
  );
}

export default Discussion;
