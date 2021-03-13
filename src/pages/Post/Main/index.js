import { Container, Cover, Img, Content, Header, Title, Tags, Tag } from './style';

function Main() {
  return (
    <Container>
      <Cover>
        <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Cover"/>
      </Cover>
      <Content>
        <Header>
          <Title>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.</Title>
          <Tags>
            <Tag bgcolor={'#F7DF1E'} color={'#000000'}>javascript</Tag>
            <Tag bgcolor={'#3D8836'} color={'#FFF'}>nodejs</Tag>
            <Tag bgcolor={'#562765'} color={'#FFF'}>reactjs</Tag>
          </Tags>
        </Header>
      </Content>
    </Container>
  );
}

export default Main;
