import { Container, Info, Username, Date } from './style';
import ProfilePhoto from '../../../../../../components/ProfilePhoto';
import { HiDotsHorizontal } from 'react-icons/hi';

function Header() {
  return (
    <Container>
      <Info>
        <Username>João</Username>
        <Date>Mar 16</Date>
      </Info>
      <HiDotsHorizontal />
    </Container>
  );
}

export default Header;
