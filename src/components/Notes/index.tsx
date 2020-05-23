import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Note } from 'components/Note';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { INote } from 'store/modules/notes/@types';
import { getNotes } from 'store/modules/notes/actions';
import {
  selectNotes,
  selectNotesError,
  selectNotesLoading,
} from 'store/modules/notes/selectors';
import useSelectors from 'utils/useSelectors';

import { NotesWrapper } from './styled';

const Notes = () => {
  const dispatch = useDispatch();
  const { loading, notes, error } = useSelectors({
    loading: selectNotesLoading,
    notes: selectNotes,
    error: selectNotesError,
  });

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  if (error) {
    return <Typography color="textSecondary">There was an error :(</Typography>;
  }

  if (!notes && !loading) {
    return <Typography color="textSecondary">No notes at all :(</Typography>;
  }
  return (
    <NotesWrapper>
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        notes.map((note: INote, index: number) => {
          return <Note note={note} key={index} />;
        })
      )}
    </NotesWrapper>
  );
};

export default Notes;
