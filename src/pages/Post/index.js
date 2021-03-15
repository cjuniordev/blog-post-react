import { Container, Columns } from './style';
import Header from '../../components/Header';
import ReactionButtons from './ReactionButtons';
import Main from './Main';
import AsideBar from './AsideBar';

function Post() {
  return (
    <Container>
      <Header />
      <Columns>
        <ReactionButtons />
        <Main />
        <AsideBar />
      </Columns>
    </Container>
  );
}

export default Post;
