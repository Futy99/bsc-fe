import { Button, CardContent, CircularProgress, Divider, TextField, Theme, Typography, WithStyles, withStyles } from '@material-ui/core'
import ButtonLoading from 'components/ButtonLoading'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { updateNote } from 'store/modules/note/actions'
import { selectNote, selectNoteError, selectNoteLoading, selectNoteSubmitting } from 'store/modules/note/selectors'
import useSelectors from 'utils/useSelectors'

import { ButtonGroup, StyledCard } from './styled'

interface IProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => ({
  textField: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    color: theme.palette.primary.dark,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
})

const Detail = (props: IProps) => {
  const { classes } = props
  const [isBeingEdited, setIsBeingEdited] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { loading, note, error, submitting } = useSelectors({
    loading: selectNoteLoading,
    note: selectNote,
    error: selectNoteError,
    submitting: selectNoteSubmitting,
  })
  const [noteText, setNoteText] = useState('')

  useEffect(() => {
    if (noteText !== note?.note) {
      setNoteText(note?.note)
    }
  }, [note])

  const resolveButton = () => {
    if (isBeingEdited) {
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(updateNote(note.id, noteText))
              setNoteText(note.note)
              setIsBeingEdited(false)
            }}
          >
            {t('components.detail.save')}
          </Button>
        </>
      )
    } else if (submitting) {
      return (
        <>
          <Button variant="contained" color="primary" onClick={() => setIsBeingEdited(true)}>
            <ButtonLoading submitting={submitting} size={14} loadingColor="secondary" text={t('components.detail.saving')} />
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button variant="contained" color="primary" onClick={() => setIsBeingEdited(true)}>
            {t('components.detail.edit')}
          </Button>
        </>
      )
    }
  }

  if (error) {
    return <Typography color="textSecondary">{t('components.detail.error')}</Typography>
  }

  if (loading || !note) {
    return <CircularProgress color="primary" />
  }
  return (
    <StyledCard>
      <CardContent>
        <Typography color="textSecondary">{note.id}</Typography>
        <Divider className={classes.divider} />
        {isBeingEdited ? (
          <TextField
            focused={true}
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            id="outlined-basic"
            variant="outlined"
            multiline
            onChange={e => setNoteText(e.target.value)}
            value={noteText}
          />
        ) : (
          <Typography color="textSecondary">{note.note}</Typography>
        )}
        <ButtonGroup>{resolveButton()}</ButtonGroup>
      </CardContent>
    </StyledCard>
  )
}

export default withStyles(styles)(Detail)
