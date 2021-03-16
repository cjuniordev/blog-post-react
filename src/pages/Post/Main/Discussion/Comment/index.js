import { Container, PhotoWrapper, CommentLabel } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';
import Header from './Header';

function Comment() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={32}/>
      </PhotoWrapper>
      <CommentLabel>
        <Header />
      </CommentLabel>
    </Container>
  );
}

export default Comment;
