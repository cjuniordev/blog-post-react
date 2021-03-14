import { Container, Cover, Img, Content, Header, Title } from './style';
import Tags from './Tags';
import Info from './Info';

function Main() {
  return (
    <Container>
      <Cover>
        <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Cover"/>
      </Cover>
      <Content>
        <Header>
          <Title>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.</Title>
          <Tags />
          <Info />
        </Header>
      </Content>
    </Container>
  );
}

export default Main;
