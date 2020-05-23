import { createSelector } from 'reselect';
import { IRedux } from 'store/reducers';

const selectNotesSubState = (state: IRedux) => state.notes;

export const selectNotesLoading = createSelector(
  selectNotesSubState,
  state => state.loading,
);

export const selectNotesSubmitting = createSelector(
  selectNotesSubState,
  state => state.submitting,
);

export const selectNotes = createSelector(
  selectNotesSubState,
  state => state.data,
);
export const selectNotesError = createSelector(
  selectNotesSubState,
  state => state.error,
);
