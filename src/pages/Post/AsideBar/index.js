import { Container, Profile, Trending, Banner, ProfilePhoto } from './style';
import Photo from '../../../components/ProfilePhoto';

function AsideBar() {
  return (
    <Container>
      <Profile>
        <Banner />
        <ProfilePhoto>
          <Photo/>
        </ProfilePhoto>
      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
