import { Container, Profile, Trending, Banner, ProfilePhoto, Name, Description } from './style';
import Photo from '../../../components/ProfilePhoto';

function AsideBar() {
  return (
    <Container>
      <Profile>
        <Banner />
        <ProfilePhoto>
          <Photo size={50}/>
          <Name>Carlos</Name>
        </ProfilePhoto>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ante vel elit finibus faucibus. In urna felis, malesuada id urna ac, blandit dictum nisi. Suspendisse nec tortor imperdiet, scelerisque.
        </Description>
      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
