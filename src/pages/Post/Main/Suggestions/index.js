import { Container, Title, Suggetion, PhotoWrapper, Post, PostTitle, Info } from './style';
import ProfilePhoto from '../../../../components/ProfilePhoto';

function Suggestions() {
  return (
    <Container>
      <Title>Read next</Title>
      <Suggetion>
        <PhotoWrapper><ProfilePhoto size={64}/></PhotoWrapper>
        <Post>
          <PostTitle>
            How create a post?
          </PostTitle>
          <Info>Zézin - Mar 11</Info>
        </Post>
      </Suggetion>
    </Container>
  );
}

export default Suggestions;
