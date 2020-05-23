import isObject from 'lodash-es/isObject';
import isUndefined from 'lodash-es/isUndefined';
import merge from 'lodash-es/merge';
import { AnyAction, Reducer } from 'redux';

const INIT = '@@redux/INIT';
export default function createReducer(
  initialState: any,
  handlers: any,
): Reducer<any> {
  if (isUndefined(initialState)) {
    throw new Error('undefined passed to `createReducer` as initial state.');
  }

  if (!isUndefined(handlers) && !isObject(handlers)) {
    throw new Error('Invalid handlers object passed to `createReducer`');
  }

  return function reducer(state: any = initialState, action: AnyAction) {
    let resultState = state;
    if (action.type === INIT) {
      if (initialState.asMutable) {
        // check of immutable object
        resultState = initialState.mergeDeep(state);
      } else {
        resultState = merge({}, initialState, state);
      }

      return resultState;
    }

    if (handlers && handlers.hasOwnProperty(action.type)) {
      const handler = handlers[action.type];
      resultState = handler(state, action);
    }

    return resultState;
  };
}
