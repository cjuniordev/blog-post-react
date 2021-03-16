import { Container, Title } from './style';
import Post from './Post';

function Suggestions() {
  return (
    <Container>
      <Title>Read next</Title>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Suggestions;
