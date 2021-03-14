import { Container, Profile, Name, Date, TimeRead } from './style';
import ProfilePhoto from '../../../../components/ProfilePhoto';

function Info() {
  return (
    <Container>
      <Profile>
        <ProfilePhoto size={32}/>
        <Name>Carlos Jr</Name>
      </Profile>
      <Date>13 de mar.</Date>
      <TimeRead>3 min read</TimeRead>
    </Container>
  );
}

export default Info;
