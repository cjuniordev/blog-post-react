import styled from 'styled-components';

export const Container = styled.div`
  background-color: #D2D6DB;

  padding: 48px;

  box-sizing: border-box;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.div`
  width: 740px;
  margin-top: -16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  color: rgb(32, 36, 40);
`;

export const LinkRow = styled.div`
  padding-bottom: 16px;
`;

export const Link = styled.a`
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const Bold = styled.span`
  font-weight: 700
`;

export const Icons = styled.div`
  width: 100%;

  padding-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(77, 87, 96);
`;

export const IconWrapper = styled.a`
  height: 24px;
  width: 24px;
  margin: 0 8px;

  & > * {
    height: 100%;
    width: 100%;
  }
`;
