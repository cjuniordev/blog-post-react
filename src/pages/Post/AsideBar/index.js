import { Container, Profile, Trending, Banner, ProfilePhoto, Name, Description } from './style';
import Photo from '../../../components/ProfilePhoto';
import Button from '../../../components/Button';

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
        <Button height={38} width={110}>
          Follow
        </Button>
      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
