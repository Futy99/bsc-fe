import { Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddNoteButton from 'components/AddNoteButton'
import AddNoteCard from 'components/AddNoteCard'
import { Note } from 'components/Note'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { INote } from 'store/modules/notes/@types'
import { getNotes } from 'store/modules/notes/actions'
import { selectNotes, selectNotesError, selectNotesLoading, selectNotesSubmitting } from 'store/modules/notes/selectors'
import useSelectors from 'utils/useSelectors'

import { NotesWrapper } from './styled'

const Notes = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [isBeingEdited, setEditingState] = useState(false)
  const { loading, notes, error, submitting } = useSelectors({
    loading: selectNotesLoading,
    notes: selectNotes,
    error: selectNotesError,
    submitting: selectNotesSubmitting,
  })

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  if (error) {
    return <Typography color="textSecondary">{t('components.notes.error')}</Typography>
  }

  if (!notes && !loading) {
    return <Typography color="textSecondary">{t('components.notes.noNotes')}</Typography>
  }
  return (
    <NotesWrapper>
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          {notes.map((note: INote, index: number) => {
            return <Note note={note} key={index} />
          })}
          <AddNoteButton isBeingEdited={isBeingEdited} setEditingState={setEditingState} submitting={submitting} />
          <AddNoteCard isBeingEdited={isBeingEdited} setEditingState={setEditingState} />
        </>
      )}
    </NotesWrapper>
  )
}

export default Notes
