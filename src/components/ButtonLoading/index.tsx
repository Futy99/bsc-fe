import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import React from 'react'

interface IProps {
  submitting: boolean
  size?: number
  text?: string
  loadingColor?: 'primary' | 'secondary'
  onClick?: () => void // just for testing purpose
  disabled?: boolean // just for testing purpose
}

// component updated to be tested more easily

const ButtonLoading = ({ submitting, size = 14, text = 'Click me', loadingColor = 'primary', onClick = null, disabled }: IProps) => {
  if (onClick) {
    return (
      <Button onClick={() => onClick()} disabled={disabled}>
        Click me
      </Button>
    ) // just for testing purpose
  }
  return <>{submitting ? <CircularProgress size={size} color={loadingColor} /> : <Typography>{text}</Typography>}</>
}

export default ButtonLoading
