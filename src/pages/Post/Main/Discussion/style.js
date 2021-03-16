import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 14px;
  line-heigth: 21px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  line-heigth: 36px;
`;

export const Button = styled.button`
  padding: 6px 14px;
  border: 2px solid rgba(54, 61, 68, 0.4);
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px 0px;
  background-color: #FFFFFF;
  color: #363D44;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const Comment = styled.div`
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

export const TextArea = styled.textarea`
  height: 60px;
  width: 100%;

  border: none;
  border-radius: 5px;
  box-shadow: rgba(8, 9, 10, 0.4) 0px 0px 0px 1px;

  padding: 8px;
  resize: vertical;

  font-size: 16px;
  line-height: 24px;
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
  line-height: 21px
`;
