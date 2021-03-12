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

      </Profile>
      <Trending></Trending>
    </Container>
  );
}

export default AsideBar;
