import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;

export const PhotoWrapper = styled.div`
  margin-right: 8px;
`;

export const CommentLabel = styled.div`
  height: 60px;
  width: 100%;

  padding: 4px;
  border-radius: 5px;

  box-shadow: rgba(8, 9, 10, 0.1) 0px 0px 0px 1px
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px 12px 0;

  color: rgb(100, 112, 125);
`;

export const CommentHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentUsername = styled.div`
  color: rgb(77, 87, 96);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CommentDate = styled.div`
  &:before{
    content: '・';
    padding: 0 1px 0 3px;
  }

  font-size: 14px;
  line-height: 24px
`;
