import { createSelector } from 'reselect';
import { IRedux } from 'store/reducers';

const selectNoteSubState = (state: IRedux) => state.note;

export const selectNoteLoading = createSelector(
  selectNoteSubState,
  state => state.loading,
);

export const selectNote = createSelector(
  selectNoteSubState,
  state => state.data,
);

export const selectNoteError = createSelector(
  selectNoteSubState,
  state => state.error,
);

export const selectNoteSubmitting = createSelector(
  selectNoteSubState,
  state => state.submitting,
);
