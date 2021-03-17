import { Container, Content, Links, LinkRow, Link, Bold } from './style';

function Footer() {
  return (
    <Container>
      <Content>
        <Links>
          <LinkRow>
            <Link>Home</Link>
            <Link>Reading List</Link>
            <Link>Listings</Link>
            <Link>Podcasts</Link>
            <Link>Videos</Link>
            <Link>Tags</Link>
            <Link>Code of Conduct</Link>
            <Link>FAQ</Link>
          </LinkRow>
          <LinkRow>
            <Link>DEV Shop</Link>
            <Link>Sponsors</Link>
            <Link>About</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of use</Link>
            <Link>Contact</Link>
            <Link><Bold>Write a post</Bold></Link>
          </LinkRow>
        </Links>
      </Content>
    </Container>
  );
}

export default Footer;
