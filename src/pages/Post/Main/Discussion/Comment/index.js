import { Container, PhotoWrapper, CommentLabel, CommentHeader, CommentHeaderInfo, CommentUsername, CommentDate } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';
import { HiDotsHorizontal } from 'react-icons/hi';

function Comment() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={32}/>
      </PhotoWrapper>
      <CommentLabel>
        <CommentHeader>
          <CommentHeaderInfo>
            <CommentUsername>João</CommentUsername>
            <CommentDate>Mar 16</CommentDate>
          </CommentHeaderInfo>
          <HiDotsHorizontal />
        </CommentHeader>
      </CommentLabel>
    </Container>
  );
}

export default Comment;
