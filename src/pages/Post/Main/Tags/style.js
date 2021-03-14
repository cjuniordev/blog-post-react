import styled from 'styled-components';


export const Container = styled.div`
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
