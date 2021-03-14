import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 62%;
`;

export const Cover = styled.div`
  height: 300px;
  width: 100%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  padding: 32px 64px 0;

  background-color: #FFF;
`;

export const Header = styled.div`

`;

export const Title = styled.h1`
 font-size: 48px;
 font-weight: 800;
 line-height: 60px;
 margin-bottom: 16px;
`;


export const Tags = styled.div`
  margin-bottom: 18px;
`;

export const Tag = styled.span`
  &:before{
    content: '#';
    color: #000000;
    opacity: 0.4;
  }

  padding: 4px;
  margin-right: 4px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: ${props => props.color};
  background-color: ${props => props.bgcolor};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 14px;
  line-heigth: 21px;

  color: #64707D;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 16px;
`;

export const Name = styled.div`
  margin-left: 8px;

  font-size: 16px;
  line-heigth: 24px;
  font-weight: 400;

  color: #000000;
`;


export const Date = styled.div`
  padding-right: 2px;
`;


export const TimeRead = styled.div`
  &:before{
    content: '・';
    padding: 0 1px 0 3px;
  }
`;
