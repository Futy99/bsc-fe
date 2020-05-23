import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import React from 'react'

interface IProps {
  submitting: boolean;
  size: number;
  text: string;
  loadingColor: 'primary' | 'secondary';
}

const ButtonLoading = (props: IProps) => {
  const { submitting, size, text, loadingColor } = props;
  return (
    <>
      {submitting ? <CircularProgress size={size} color={loadingColor}/> : <Typography>{text}</Typography>}
    </>
  )
}

export default ButtonLoading;