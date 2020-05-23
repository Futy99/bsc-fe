import styled from 'styled-components';

export const Container = styled('div')`
  padding-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TopBar = styled('div')`
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.palette.primary.main};
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  margin-bottom: 100px;
`;

export const TopBarText = styled('p')`
  color: white;
  font-size: 26px;
  font-weight: bold;
`;

export const ChangeLanguage = styled('div')`
  position: absolute;
  top: 20px;
  right: 20px;
`;
