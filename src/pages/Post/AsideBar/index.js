import { Container, Profile, Trending, Banner, ProfilePhoto } from './style';
import Photo from '../../../components/ProfilePhoto';

function AsideBar() {
  return (
    <Container>
      <Profile>
        <Banner />
        <ProfilePhoto>
          <Photo size={50}/>
        </ProfilePhoto>
      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
