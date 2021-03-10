import styled from 'styled-components';

export const Container = styled.div`
  --width-button: 30px;

  height: 50vh;
  width: 60px;

  display: flex !important;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: var(--width-button);

  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

export const Button = styled.a`
  height: var(--width-button);
  width: var(--width-button);

  & > * {
    height: 100%;
    width: 100%;

    color: #363D44;
  }
`;

export const Count = styled.p`
  width: var(--width-button);
  text-align: center;

  padding-top: 7px;
`;
