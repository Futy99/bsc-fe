import { NotificationManager } from 'react-notifications'
import { fork, put, takeEvery } from 'redux-saga/effects'

import { getNotes } from '../notes/actions'
import * as actions from './actions'
import { getNoteRequest, updateNoteRequest } from './requests'

function* getNote() {
  yield takeEvery(actions.Types.GET_NOTE, function* handle(action: ReturnType<typeof actions.getNote>) {
    const { id } = action.payload
    try {
      const note = yield getNoteRequest(id)
      yield put(actions.getNoteSuccess(note.data))
    } catch (error) {
      NotificationManager.error('Could not fetch note', 'Error');
      yield put(actions.getNoteFailure(error))
    }
  })
}

function* updateNote() {
  yield takeEvery(actions.Types.UPDATE_NOTE, function* handle(action: ReturnType<typeof actions.updateNote>) {
    const { id, text } = action.payload
    try {
      yield updateNoteRequest(id, text)
      const note = {
        id,
        note: text,
      }
      yield put(actions.updateNoteSuccess(note))
      //
      // This is not 100% optimal sollution [yield put(getNotes())]
      // But for test coding it's enough I think. It's easier because we have seperate states for notes and note
      // So it's easier to just call whole flow to get current data
      //
      yield put(getNotes())
      NotificationManager.success('Note was updated!', 'Success');
    } catch (error) {
      NotificationManager.error('Could not update note', 'Error');
      yield put(actions.updateNoteFailure())
    }
  })
}

export default function* personsSage() {
  yield fork(getNote)
  yield fork(updateNote)
}