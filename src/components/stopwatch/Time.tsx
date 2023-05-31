import React, { FC } from 'react'
import { formatMsecsString } from '../../utils/time';

type TimeProps = {
  seconds: number
  size: 'small' | 'large'
}

export const Time: FC<TimeProps> = ({ seconds, size }) => {
  return (
    <div style={{ fontSize: size === 'small' ? '14px' : '80px' }}>
      {formatMsecsString(seconds)}
    </div>
  )
}
