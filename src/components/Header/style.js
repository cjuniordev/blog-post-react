import styled from 'styled-components';

export const Container = styled.div`
  --height-childs: 38px;

  padding: 6px 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  z-index: 99999;

  -webkit-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 0.5px 2px 0px rgba(0,0,0,0.2);

  background-color: #FFFF;
`;

export const Logo = styled.div`
  height: var(--height-childs);
  width: 50px;

  border-radius: 5px;

  display: flex;
  align-item: center;
  justify-content: center;

  background-color: #000000;
  color: #FFFF;

  font-size: 16px;
  font-weight: bold;
`;

export const ContainerButton = styled.div`
  width: 110px;
`;

export const Options = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  & > * {
    margin-right: 10px;
  }
`;

export const Option = styled.div`
  height: var(--height-childs);
  width: var(--height-childs);

  display: flex;
  align-item: center;
  justify-content: center;

  & > * {
    height: 70%;
    width: 70%;

    padding-top: 5px;
  }
`;
