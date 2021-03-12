import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 30%;

  border-radius: 6px 6px 0 0;
`;

export const Profile = styled.div`
  width: 100%;

  background-color: #FFFF;
`;

export const Banner = styled.div`
  height: 30px;
  width: 100%;

  border-radius: 6px 6px 0 0;
  background-color: #000000;
`;

export const Trending = styled.div`
  width: 100%;
`;

export const ProfilePhoto = styled.div`
  height: 50px;
  width: 100%;

  position: relative;
  top: -15px;
  left: 15px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Name = styled.p`
  padding: 0 0 10px 5px;

  font-weight: 700;
  font-size: 20px
`;
