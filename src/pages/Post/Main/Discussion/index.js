import { Container, Header, Title, Button, Comment, PhotoWrapper, CommentLabel, CommentHeader, CommentHeaderInfo, CommentUsername, CommentDate } from './style';
import ToComment from './ToComment';
import ProfilePhoto from '../../../../components/ProfilePhoto';

import { HiDotsHorizontal } from 'react-icons/hi';

function Discussion() {
  return (
    <Container>
      <Header>
        <Title>Discussion (2)</Title>
        <Button>Subscribe</Button>
      </Header>
      <ToComment />
      <Comment>
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
      </Comment>
    </Container>
  );
}

export default Discussion;
