import { Container, PhotoWrapper, CommentLabel } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';
import Header from './Header';
import Body from './Body';

function Comment() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={32}/>
      </PhotoWrapper>
      <CommentLabel>
        <Header />
        <Body />
      </CommentLabel>
    </Container>
  );
}

export default Comment;
