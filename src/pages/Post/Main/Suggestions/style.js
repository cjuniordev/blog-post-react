import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 32px 64px;
  border-radius: 10px;

  box-sizing: border-box;

  background-color: #F9FAFA;
  box-shadow: rgba(8, 9, 10, 0.05) 0px 0px 0px 1px
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

export const Suggetion = styled.div`
  width: 100%;

  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PhotoWrapper = styled.div`
  margin-right: 16px;
`;

export const Post = styled.div`
  width: 100%;
`;

export const PostTitle = styled.h2`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
`;

export const Info = styled.p`
  padding-top: 4px;

  font-size: 16px;
  line-height: 24px;

  color: #7A7A7A;
`;
