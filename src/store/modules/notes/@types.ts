export interface INotes {
  id: string
  note: string
}

export interface INotesReducer {
  data: INotes[]
  loading: boolean
}
