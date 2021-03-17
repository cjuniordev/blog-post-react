import { Container, Content, Links, LinkRow, Link, Bold, Icons, IconWrapper } from './style';

// icons
import { RiTwitterFill, RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiTwitchFill } from 'react-icons/ri';

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
          <Icons>
            <IconWrapper><RiTwitterFill /></IconWrapper>
            <IconWrapper><RiFacebookBoxFill /></IconWrapper>
            <IconWrapper><RiGithubFill /></IconWrapper>
            <IconWrapper><RiInstagramFill /></IconWrapper>
            <IconWrapper><RiTwitchFill /></IconWrapper>
          </Icons>
        </Links>
      </Content>
    </Container>
  );
}

export default Footer;
