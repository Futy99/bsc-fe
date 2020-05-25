import Detail from 'components/Detail'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNote } from 'store/modules/note/actions'

const NotesDetail = props => {
  const { state } = props.location
  const dispatch = useDispatch()

  useEffect(() => {
    if (state?.id) {
      const { id } = state
      dispatch(getNote(id))
    }
  }, [])

  return (
    <>
      <Detail />
    </>
  )
}

export default NotesDetail
