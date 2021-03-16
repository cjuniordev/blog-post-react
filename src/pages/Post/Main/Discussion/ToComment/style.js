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
