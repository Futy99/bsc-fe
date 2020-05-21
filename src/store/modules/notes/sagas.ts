import { fork, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'
import { getNotesRequest } from './requests'

function* getNotes() {
  yield takeEvery(actions.Types.GET_NOTES, function* handle(action: ReturnType<typeof actions.getNotes>) {
    try {
      const notes = yield getNotesRequest()
      yield put(actions.getNotesSuccess(notes))
    } catch (error) {
      // pop-up error notification
      // handleApiError(error)
      yield put(actions.getNotesFailure())
    }
  })
}

export default function* personsSage() {
  yield fork(getNotes)
}
