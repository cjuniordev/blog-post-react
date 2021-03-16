import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-top: 4px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 4px 12px 4px 8px;
  margin-right: 4px;

  border: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px

  background-color: rgba(0, 0, 0, 0);
  color: rgb(54, 61, 68);
`;

export const IconWrapper = styled.div`
  height: 24px;
  margin-right: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    height: 90%;
    width: 90%;
  }
`;

export const ButtonStatus = styled.span`
`;

export const ButtonDescription = styled.span`
  margin-left: 4px;
`;
