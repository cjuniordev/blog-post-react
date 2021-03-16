import { Container, PhotoWrapper, Wrapper, PostTitle, Info } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';

function Post() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={64}/>
      </PhotoWrapper>
      <Wrapper>
        <PostTitle>
          How create a post?
        </PostTitle>
        <Info>Zézin - Mar 11</Info>
      </Wrapper>
    </Container>
  );
}

export default Post;
