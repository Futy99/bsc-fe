import i18n from 'i18next'
import { NotificationManager } from 'react-notifications'
import { fork, put, select, takeEvery } from 'redux-saga/effects'

import { INote } from './@types'
import * as actions from './actions'
import { addNoteRequest, deleteNoteRequest, getNotesRequest } from './requests'
import { selectNotes } from './selectors'

function* getNotes() {
  yield takeEvery(actions.Types.GET_NOTES, function* handle() {
    try {
      const notes = yield getNotesRequest()
      yield put(actions.getNotesSuccess(notes.data))
    } catch (error) {
      NotificationManager.error(i18n.t('notifications.error.get'), 'Error')
      yield put(actions.getNotesFailure(error))
    }
  })
}

function* deleteNote() {
  yield takeEvery(actions.Types.DELETE_NOTE, function* handle(action: ReturnType<typeof actions.deleteNote>) {
    const { id } = action.payload
    try {
      const notes = yield select(selectNotes)
      yield deleteNoteRequest(id)
      const filteredNotes = notes.filter((note: INote) => id !== note.id)
      yield put(actions.deleteNoteSuccess(filteredNotes))
      NotificationManager.success(i18n.t('notifications.success.delete'), 'Success')
    } catch (error) {
      NotificationManager.error(i18n.t('notifications.error.delete'), 'Error')
      yield put(actions.deleteNoteFailure())
    }
  })
}

function* addNote() {
  yield takeEvery(actions.Types.ADD_NOTE, function* handle(action: ReturnType<typeof actions.addNote>) {
    const { text } = action.payload
    try {
      const note = yield addNoteRequest(text)
      yield put(actions.addNoteSuccess(note.data))
      NotificationManager.success(i18n.t('notifications.success.add'), 'Success')
    } catch (error) {
      NotificationManager.error(i18n.t('notifications.error.add'), 'Error')
      yield put(actions.AddNoteFailure())
    }
  })
}

export default function* personsSage() {
  yield fork(getNotes)
  yield fork(deleteNote)
  yield fork(addNote)
}
