import { NotificationManager } from 'react-notifications'
import { fork, put, select, takeEvery } from 'redux-saga/effects'

import { INote } from './@types'
import * as actions from './actions'
import { deleteNotesRequest, getNotesRequest } from './requests'
import { selectNotes } from './selectors'

function* getNotes() {
  yield takeEvery(actions.Types.GET_NOTES, function* handle() {
    try {
      const notes = yield getNotesRequest()
      yield put(actions.getNotesSuccess(notes.data))
    } catch (error) {
      NotificationManager.error('Could not fetch notes', 'Error');
      yield put(actions.getNotesFailure(error))
    }
  })
}

function* deleteNote() {
  yield takeEvery(actions.Types.DELETE_NOTE, function* handle(action: ReturnType<typeof actions.deleteNote>) {
    const { id } = action.payload;
    try {
      const notes = yield select(selectNotes)
      yield deleteNotesRequest(id)
      const filteredNotes = notes.filter((note: INote) =>  id !== note.id)
      yield put(actions.deleteNotesSuccess(filteredNotes))
      NotificationManager.success('Note Deleted', 'Success');
    } catch (error) {
      NotificationManager.error('Could note delete note', 'Error');
      yield put(actions.deleteNotesFailure())
    }
  })
}

export default function* personsSage() {
  yield fork(getNotes)
  yield fork(deleteNote)
}
