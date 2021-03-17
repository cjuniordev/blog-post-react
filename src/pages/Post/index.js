import { Container, Columns } from './style';
import Header from '../../components/Header';
import ReactionButtons from './ReactionButtons';
import Main from './Main';
import AsideBar from './AsideBar';
import Footer from '../../components/Footer';

function Post() {
  return (
    <Container>
      <Header />
      <Columns>
        <ReactionButtons />
        <Main />
        <AsideBar />
      </Columns>
      <Footer />
    </Container>
  );
}

export default Post;
