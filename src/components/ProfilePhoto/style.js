import styled from 'styled-components';

export const Profile = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  display: flex;
  align-item: center;
  justify-content: center;

  margin-right: 0 !important;
`;

export const ImgProfile = styled.img`
  border-radius: 50%;
`;
