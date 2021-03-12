import { Container, Wrapper, Banner, ContainerPhoto, Name, Description, Since, SinceTitle, SinceDate } from './style';
import Photo from '../../../../components/ProfilePhoto';
import Button from '../../../../components/Button';

function Profile() {
  return (
    <Container>
      <Banner />
      <Wrapper>
        <ContainerPhoto>
          <Photo size={50}/>
          <Name>Carlos</Name>
        </ContainerPhoto>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ante vel elit finibus faucibus. In urna felis, malesuada id urna ac, blandit dictum nisi. Suspendisse nec tortor imperdiet, scelerisque.
        </Description>
        <Button>Follow</Button>
        <Since>
          <SinceTitle>JOINED</SinceTitle>
          <SinceDate>1 de nov. de 2018</SinceDate>
        </Since>
      </Wrapper>
    </Container>
  );
}

export default Profile;
