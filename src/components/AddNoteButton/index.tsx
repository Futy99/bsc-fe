import AddIcon from '@material-ui/icons/Add';
import React from 'react';

import { StyledIconButton } from './styled';

interface IProps {
  isBeingEdited: boolean;
  setEditingState: (state: boolean) => void;
  submitting: boolean;
}

const AddNoteButton = ({
  isBeingEdited,
  setEditingState,
  submitting,
}: IProps) => {
  if (isBeingEdited) {
    return null;
  }
  return (
    <>
      <StyledIconButton
        aria-label="Add"
        onClick={() => setEditingState(!isBeingEdited)}
        disabled={submitting}
      >
        <AddIcon fontSize="large" color="primary" />
      </StyledIconButton>
    </>
  );
};

export default AddNoteButton;
