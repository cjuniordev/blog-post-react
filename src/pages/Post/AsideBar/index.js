import { Container, Wrapper, Profile, Trending, Banner, ProfilePhoto, Name, Description, ContainerButton, Since, SinceTitle, SinceDate } from './style';
import Photo from '../../../components/ProfilePhoto';
import Button from '../../../components/Button';

function AsideBar() {
  return (
    <Container>
      <Profile>
      <Banner />
        <Wrapper>
          <ProfilePhoto>
            <Photo size={50}/>
            <Name>Carlos</Name>
          </ProfilePhoto>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ante vel elit finibus faucibus. In urna felis, malesuada id urna ac, blandit dictum nisi. Suspendisse nec tortor imperdiet, scelerisque.
          </Description>
          <Button>Follow</Button>
          <Since>
            <SinceTitle>JOINED</SinceTitle>
            <SinceDate>1 de nov. de 2018</SinceDate>
          </Since>
        </Wrapper>
      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
