import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 30%;

  border-radius: 6px 6px 0 0;
`;

export const Wrapper= styled.div`
  padding: 0 16px 16px 16px;
`

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

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Name = styled.p`
  padding: 0 0 10px 5px;

  font-weight: 700;
  font-size: 20px
`;

export const Description = styled.p`
  padding-bottom: 10px;

  color: rgb(77, 87, 96);
  font-size: 16px;
  line-height: 24px;

  word-break: break-word;
`;

export const Since = styled.div`
  padding-top: 10px;
`;

export const SinceTitle = styled.p`
  color: rgb(77, 87, 96);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;

export const SinceDate = styled.p`
  color: rgb(32, 36, 40);
  font-size: 16px;
  line-height: 24px;
`;
