import styled from 'styled-components';


export const Container = styled.div`
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
