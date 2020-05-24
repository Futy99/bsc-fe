import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  min-width: 600px;
`;

export const ButtonGroup = styled('div')`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 80%;
  margin-top: 15px;
`;
