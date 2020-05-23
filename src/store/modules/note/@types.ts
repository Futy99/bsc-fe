import { INote } from '../notes/@types'

export interface INoteReducer {
  data: INote
  loading: boolean
  submitting: boolean
  error: Error
}