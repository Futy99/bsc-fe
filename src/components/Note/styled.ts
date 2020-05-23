import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import styled from 'styled-components'

export const ExpandCard = styled(ExpansionPanel)`
  min-width: 500px;
`;

export const ExpandCardDetail = styled(ExpansionPanelDetails)`
  display: flex;
  flex-direction: column;
`;

export const ButtonGroup = styled('div')`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 60%;
  margin-top: 15px;
`;