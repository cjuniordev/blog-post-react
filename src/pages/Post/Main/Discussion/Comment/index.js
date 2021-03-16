import { Container, PhotoWrapper, Wrapper, Label } from './style';
import ProfilePhoto from '../../../../../components/ProfilePhoto';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Comment() {
  return (
    <Container>
      <PhotoWrapper>
        <ProfilePhoto size={32}/>
      </PhotoWrapper>
      <Wrapper>
        <Label>
          <Header />
          <Body />
        </Label>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default Comment;
