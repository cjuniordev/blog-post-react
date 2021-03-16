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

export const ToComment = styled.div`
  width: 100%;

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

  border-radius: 5px;
  padding: 8px;
  resize: vertical;

  font-size: 16px;
  line-height: 24px;
`;
