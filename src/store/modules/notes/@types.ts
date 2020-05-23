export interface INote {
  id: string;
  note: string;
}

export interface INotesReducer {
  data: INote[];
  loading: boolean;
  submitting: boolean;
  error: Error;
}
