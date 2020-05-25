import { Button, CardContent, TextField, Theme, WithStyles, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { addNote } from 'store/modules/notes/actions'

import { StyledButtonWrapper, StyledCard } from './styled'

interface IProps extends WithStyles<typeof styles> {
  isBeingEdited: boolean
  setEditingState: (state: boolean) => void
}

const styles = (theme: Theme) => ({
  textField: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    color: theme.palette.primary.dark,
  },
})

const AddNoteCard = (props: IProps) => {
  const { classes, isBeingEdited, setEditingState } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [noteText, setNoteText] = useState('')
  if (!isBeingEdited) {
    return null
  }
  return (
    <StyledCard>
      <CardContent>
        <TextField
          focused={true}
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
          id="outlined-basic"
          variant="outlined"
          multiline
          placeholder={t('components.addNoteCard.placeholder')}
          onChange={e => setNoteText(e.target.value)}
          value={noteText}
        />
        <StyledButtonWrapper>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setEditingState(!isBeingEdited)
              setNoteText('')
              dispatch(addNote(noteText))
            }}
          >
            {t('components.addNoteCard.save')}
          </Button>
        </StyledButtonWrapper>
      </CardContent>
    </StyledCard>
  )
}

export default withStyles(styles)(AddNoteCard)
