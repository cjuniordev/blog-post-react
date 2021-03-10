import { Container } from './style';
import Header from '../../components/Header';
import ReactionButtons from './ReactionButtons';
import Main from './Main';
import AsideBar from './AsideBar';

function Post() {
  return (
    <>
      <Header />
      <Container>
        <ReactionButtons />
        <Main />
        <AsideBar />
      </Container>
    </>
  );
}

export default Post;
