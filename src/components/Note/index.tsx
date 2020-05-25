import { Button } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ButtonLoading from 'components/ButtonLoading'
import { RoutePaths } from 'constants/routePaths'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { INote } from 'store/modules/notes/@types'
import { deleteNote } from 'store/modules/notes/actions'
import { selectNotesSubmitting } from 'store/modules/notes/selectors'
import useSelectors from 'utils/useSelectors'

import { ButtonGroup, ExpandCard, ExpandCardDetail } from './styled'

interface IProps {
  note: INote
}

export const Note = (props: IProps) => {
  const { id, note } = props.note
  const history = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { submitting } = useSelectors({
    submitting: selectNotesSubmitting,
  })
  return (
    <>
      <ExpandCard>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography color="textSecondary">{id}</Typography>
        </ExpansionPanelSummary>
        <ExpandCardDetail>
          <Typography color="textSecondary">{note}</Typography>
          <Divider />
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                history.push({
                  pathname: RoutePaths.NOTES_DETAIL,
                  state: {
                    id,
                  },
                })
              }
            >
              {t('components.note.edit')}
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => dispatch(deleteNote(id))}>
              <ButtonLoading submitting={submitting} size={14} loadingColor="secondary" text={t('components.note.delete')} />
            </Button>
          </ButtonGroup>
        </ExpandCardDetail>
      </ExpandCard>
    </>
  )
}
