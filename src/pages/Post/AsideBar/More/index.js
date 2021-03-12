import { Container, Title, TitleLink, Card, Hr, CardName, CardTags, CardTag } from './style';

function More() {
  return (
    <Container>
        <Title>
          More from
          <TitleLink> Carlos</TitleLink>
        </Title>
        <Hr />
        <Card>
          <CardName>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</CardName>
          <CardTags>
            <CardTag>#tech</CardTag>
            <CardTag>#javascript</CardTag>
            <CardTag>#web</CardTag>
          </CardTags>
        </Card>
        <Hr />
        <Card>
          <CardName>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.</CardName>
          <CardTags>
            <CardTag>#react</CardTag>
            <CardTag>#styled-components</CardTag>
            <CardTag>#context</CardTag>
          </CardTags>
        </Card>
        <Hr />
        <Card>
          <CardName>Donec eget elit in lectus tristique molestie vitae vitae turpis. .</CardName>
          <CardTags>
            <CardTag>#python</CardTag>
            <CardTag>#neural</CardTag>
            <CardTag>#ai</CardTag>
          </CardTags>
        </Card>
    </Container>
  );
}

export default More;
