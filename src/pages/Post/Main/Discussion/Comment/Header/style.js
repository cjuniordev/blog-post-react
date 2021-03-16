import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px 12px 0;

  color: rgb(100, 112, 125);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Username = styled.div`
  color: rgb(77, 87, 96);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Date = styled.div`
  &:before{
    content: '・';
    padding: 0 1px 0 3px;
  }

  font-size: 14px;
  line-height: 24px
`;
