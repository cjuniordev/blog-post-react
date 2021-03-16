import { Container, PhotoWrapper, TextArea } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';

function ToComment() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={32}/>
      </PhotoWrapper>
      <TextArea placeholder="Add to the discussion" />
    </Container>
  );
}

export default ToComment;
